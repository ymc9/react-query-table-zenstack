'use client';

import { useCountOrderDetail, useFindManyOrderDetail } from '@/hooks';
import { Prisma } from '@prisma/client';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { useState } from 'react';

const queryInclude = {
    include: {
        order: { include: { employee: true } },
        product: { include: { category: true } },
    },
} satisfies Prisma.OrderDetailFindManyArgs;

const columnHelper =
    createColumnHelper<Prisma.OrderDetailGetPayload<typeof queryInclude>>();

const columns = [
    columnHelper.accessor('order.id', { header: () => <span>Order ID</span> }),
    columnHelper.accessor('order.orderDate', {
        cell: (info) => info.getValue()?.toLocaleDateString(),
        header: () => <span>Date</span>,
    }),
    columnHelper.accessor('product.name', {
        header: () => <span>Product</span>,
    }),
    columnHelper.accessor('product.category.name', {
        header: () => <span>Category</span>,
    }),
    columnHelper.accessor('unitPrice', {
        cell: (info) => `$${info.getValue().toFixed(2)}`,
        header: () => <span>Unit Price</span>,
    }),
    columnHelper.accessor('quantity', {
        header: () => <span>Quantity</span>,
    }),
    columnHelper.accessor('order.employee.firstName', {
        header: () => <span>Employee</span>,
    }),
];

const PAGE_SIZE = 10;

export const OrderDetails = () => {
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'order_id', desc: true },
    ]);

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: PAGE_SIZE,
    });

    const computeOrderBy = (): Prisma.OrderDetailOrderByWithRelationInput => {
        const result: Prisma.OrderDetailOrderByWithRelationInput = {};
        let curr: any = result;
        sorting[0]?.id.split(/[_\.]/).map((key, index, arr) => {
            curr = curr[key] =
                index == arr.length - 1
                    ? sorting[0].desc
                        ? 'desc'
                        : 'asc'
                    : {};
        });
        return result;
    };

    const { data } = useFindManyOrderDetail({
        ...queryInclude,
        orderBy: computeOrderBy(),
        skip: pagination.pageIndex * pagination.pageSize,
        take: pagination.pageSize,
    });

    const { data: count } = useCountOrderDetail();

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),

        // sorting
        manualSorting: true,
        onSortingChange: setSorting,

        // pagination
        manualPagination: true,
        onPaginationChange: setPagination,
        pageCount: Math.ceil((count ?? 0) / PAGE_SIZE),

        // state
        state: { sorting, pagination },
    });

    return (
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center container">
            <h1 className="text-3xl font-semibold">Order Items</h1>
            <table className="table-auto w-full">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="text-left">
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="p-2 cursor-pointer"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {header.column.getIsSorted() === 'asc'
                                        ? '↑'
                                        : header.column.getIsSorted() === 'desc'
                                        ? '↓'
                                        : ''}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="even:bg-slate-200 odd:bg-slate-100"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="p-2">
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="inline-flex items-center gap-2">
                <button
                    className={clsx(
                        table.getCanPreviousPage()
                            ? 'cursor-pointer'
                            : 'text-gray-400 cursor-not-allowed'
                    )}
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Prev
                </button>
                <button
                    className={clsx(
                        table.getCanNextPage()
                            ? 'cursor-pointer'
                            : 'text-gray-400 cursor-not-allowed'
                    )}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </button>
                <span className="ml-2">
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount().toLocaleString()}
                </span>
            </div>
        </div>
    );
};
