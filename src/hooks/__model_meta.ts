/* eslint-disable */
const metadata = {
    models: {
        category: {
            name: 'Category', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, products: {
                    name: "products",
                    type: "Product",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'category',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        customer: {
            name: 'Customer', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, contactName: {
                    name: "contactName",
                    type: "String",
                    isOptional: true,
                }, contactTitle: {
                    name: "contactTitle",
                    type: "String",
                    isOptional: true,
                }, address: {
                    name: "address",
                    type: "String",
                    isOptional: true,
                }, city: {
                    name: "city",
                    type: "String",
                    isOptional: true,
                }, postalCode: {
                    name: "postalCode",
                    type: "String",
                    isOptional: true,
                }, country: {
                    name: "country",
                    type: "String",
                    isOptional: true,
                }, orders: {
                    name: "orders",
                    type: "Order",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'customer',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        employee: {
            name: 'Employee', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                }, lastName: {
                    name: "lastName",
                    type: "String",
                }, firstName: {
                    name: "firstName",
                    type: "String",
                }, title: {
                    name: "title",
                    type: "String",
                    isOptional: true,
                }, region: {
                    name: "region",
                    type: "String",
                    isOptional: true,
                }, orders: {
                    name: "orders",
                    type: "Order",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'employee',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        orderDetail: {
            name: 'OrderDetail', fields: {
                orderId: {
                    name: "orderId",
                    type: "Int",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'order',
                }, productId: {
                    name: "productId",
                    type: "Int",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'product',
                }, unitPrice: {
                    name: "unitPrice",
                    type: "Float",
                }, quantity: {
                    name: "quantity",
                    type: "Int",
                }, discount: {
                    name: "discount",
                    type: "Float",
                }, order: {
                    name: "order",
                    type: "Order",
                    isDataModel: true,
                    backLink: 'details',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "orderId" },
                }, product: {
                    name: "product",
                    type: "Product",
                    isDataModel: true,
                    backLink: 'orderDetails',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "productId" },
                },
            }
            , uniqueConstraints: {
                orderId_productId: {
                    name: "orderId_productId",
                    fields: ["orderId", "productId"]
                },
            }
            ,
        }
        ,
        order: {
            name: 'Order', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                }, customerId: {
                    name: "customerId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'customer',
                }, employeeId: {
                    name: "employeeId",
                    type: "Int",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'employee',
                }, orderDate: {
                    name: "orderDate",
                    type: "DateTime",
                    isOptional: true,
                }, shippedDate: {
                    name: "shippedDate",
                    type: "DateTime",
                    isOptional: true,
                }, details: {
                    name: "details",
                    type: "OrderDetail",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'order',
                }, customer: {
                    name: "customer",
                    type: "Customer",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'orders',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "customerId" },
                }, employee: {
                    name: "employee",
                    type: "Employee",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'orders',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "employeeId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        product: {
            name: 'Product', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, categoryId: {
                    name: "categoryId",
                    type: "Int",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'category',
                }, unitPrice: {
                    name: "unitPrice",
                    type: "Float",
                    isOptional: true,
                }, orderDetails: {
                    name: "orderDetails",
                    type: "OrderDetail",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'product',
                }, category: {
                    name: "category",
                    type: "Category",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'products',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "categoryId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
};
export default metadata;
