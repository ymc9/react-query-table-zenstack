/* eslint-disable */
import type { Prisma, OrderDetail } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateOrderDetail(options?: Omit<(UseMutationOptions<(OrderDetail | undefined), DefaultError, Prisma.OrderDetailCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailCreateArgs, DefaultError, OrderDetail, true>('OrderDetail', 'POST', `${endpoint}/orderDetail/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyOrderDetail(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderDetailCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderDetail', 'POST', `${endpoint}/orderDetail/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyOrderDetail<TArgs extends Prisma.OrderDetailFindManyArgs, TQueryFnData = Array<Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findMany`, args, options, fetch);
}

export function useInfiniteFindManyOrderDetail<TArgs extends Prisma.OrderDetailFindManyArgs, TQueryFnData = Array<Prisma.OrderDetailGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findMany`, args, options, fetch);
}

export function useSuspenseFindManyOrderDetail<TArgs extends Prisma.OrderDetailFindManyArgs, TQueryFnData = Array<Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyOrderDetail<TArgs extends Prisma.OrderDetailFindManyArgs, TQueryFnData = Array<Prisma.OrderDetailGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findMany`, args, options, fetch);
}

export function useFindUniqueOrderDetail<TArgs extends Prisma.OrderDetailFindUniqueArgs, TQueryFnData = Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueOrderDetail<TArgs extends Prisma.OrderDetailFindUniqueArgs, TQueryFnData = Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findUnique`, args, options, fetch);
}

export function useFindFirstOrderDetail<TArgs extends Prisma.OrderDetailFindFirstArgs, TQueryFnData = Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstOrderDetail<TArgs extends Prisma.OrderDetailFindFirstArgs, TQueryFnData = Prisma.OrderDetailGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/findFirst`, args, options, fetch);
}

export function useUpdateOrderDetail(options?: Omit<(UseMutationOptions<(OrderDetail | undefined), DefaultError, Prisma.OrderDetailUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailUpdateArgs, DefaultError, OrderDetail, true>('OrderDetail', 'PUT', `${endpoint}/orderDetail/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyOrderDetail(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderDetailUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderDetail', 'PUT', `${endpoint}/orderDetail/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertOrderDetail(options?: Omit<(UseMutationOptions<(OrderDetail | undefined), DefaultError, Prisma.OrderDetailUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailUpsertArgs, DefaultError, OrderDetail, true>('OrderDetail', 'POST', `${endpoint}/orderDetail/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteOrderDetail(options?: Omit<(UseMutationOptions<(OrderDetail | undefined), DefaultError, Prisma.OrderDetailDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailDeleteArgs, DefaultError, OrderDetail, true>('OrderDetail', 'DELETE', `${endpoint}/orderDetail/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderDetail, Prisma.OrderDetailGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyOrderDetail(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderDetailDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDetailDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderDetail', 'DELETE', `${endpoint}/orderDetail/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.OrderDetailDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDetailDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderDetailDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateOrderDetail<TArgs extends Prisma.OrderDetailAggregateArgs, TQueryFnData = Prisma.GetOrderDetailAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderDetailAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateOrderDetail<TArgs extends Prisma.OrderDetailAggregateArgs, TQueryFnData = Prisma.GetOrderDetailAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderDetailAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/aggregate`, args, options, fetch);
}

export function useGroupByOrderDetail<TArgs extends Prisma.OrderDetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.OrderDetailGroupByArgs['orderBy'] } : { orderBy?: Prisma.OrderDetailGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.OrderDetailGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.OrderDetailGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderDetailGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderDetailGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OrderDetailGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByOrderDetail<TArgs extends Prisma.OrderDetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.OrderDetailGroupByArgs['orderBy'] } : { orderBy?: Prisma.OrderDetailGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.OrderDetailGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.OrderDetailGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderDetailGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderDetailGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OrderDetailGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/groupBy`, args, options, fetch);
}

export function useCountOrderDetail<TArgs extends Prisma.OrderDetailCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.OrderDetailCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/count`, args, options, fetch);
}

export function useSuspenseCountOrderDetail<TArgs extends Prisma.OrderDetailCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.OrderDetailCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderDetailCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('OrderDetail', `${endpoint}/orderDetail/count`, args, options, fetch);
}

export function useCheckOrderDetail<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { orderId?: number; productId?: number; quantity?: number }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('OrderDetail', `${endpoint}/orderDetail/check`, args, options, fetch);
}
