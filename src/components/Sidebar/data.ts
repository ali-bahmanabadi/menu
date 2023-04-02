export const data = [
    {
        title: 'صفحه اصلی',
        id: 1,
        link: '/home',
        nodes: null,
    },
    {
        title: 'اموزش',
        id: 2,
        link: null,
        nodes: [
            {
                title: 'عقیدتی',
                id: 3,
                parentId: 2,
                nodes: [
                    {
                        title: 'ارداره عقیدتی',
                        id: 3,
                        parentId: 3,
                        nodes: [
                            {
                                title: 'هییت ریسه',
                                id: 4,
                                parentId: 3,
                                nodes: null,
                            },
                            {
                                title: 'بازرسی',
                                id: 4,
                                parentId: 3,
                                nodes: null,
                            },
                        ],
                    },
                    {
                        title: 'ستاد عقیدتی',
                        id: 5,
                        parentId: 3,
                        nodes: [
                            {
                                title: 'فاوا',
                                id: 6,
                                ParentId: 5,
                                nodes: null,
                            },
                            {
                                title: 'اجا',
                                id: 6,
                                ParentId: 5,
                                nodes: null,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'حفاظت',
                id: 7,
                parentId: 2,
                nodes: [
                    {
                        title: 'حفاظت بالا',
                        id: 8,
                        parentId: 7,
                        nodes: [
                            {
                                title: 'ساختمان یک',
                                id: 9,
                                parentId: 8,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان دو',
                                id: 10,
                                parentId: 8,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان سه',
                                id: 11,
                                parentId: 8,
                                nodes: null,
                            },
                        ],
                    },
                    {
                        title: 'حفاظت پایین',
                        id: 12,
                        parentId: 7,
                        nodes: [
                            {
                                title: 'ساختمان یک',
                                id: 13,
                                parentId: 12,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان دو',
                                id: 14,
                                parentId: 12,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان سه',
                                id: 15,
                                parentId: 12,
                                nodes: null,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'تنظیمات',
        id: 16,
        link: null,
        nodes: [
            {
                title: 'پوسته',
                id: 17,
                parentId: 16,
                nodes: null,
            },
            {
                title: 'قالب',
                id: 18,
                parentId: 16,
                nodes: null,
            },
            {
                title: 'افزونه',
                id: 19,
                parentId: 16,
                nodes: null,
            },
        ],
    },
];
