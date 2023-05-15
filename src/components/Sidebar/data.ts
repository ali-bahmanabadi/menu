export const data = [
    {
        title: 'صفحه اصلی',
        id: 1,
        link: '/home',
        nodes: null,
        parentId: null,
    },
    {
        title: 'اموزش',
        id: 2,
        link: null,
        parentId: null,
        nodes: [
            {
                title: 'عقیدتی',
                id: 3,
                parentId: 2,
                nodes: [
                    {
                        title: 'ارداره عقیدتی',
                        id: 4,
                        parentId: 3,
                        nodes: [
                            {
                                title: 'هییت ریسه',
                                id: 5,
                                parentId: 4,
                                nodes: null,
                            },
                            {
                                title: 'بازرسی',
                                id: 6,
                                parentId: 4,
                                nodes: null,
                            },
                        ],
                    },
                    {
                        title: 'ستاد عقیدتی',
                        id: 7,
                        parentId: 3,
                        nodes: [
                            {
                                title: 'فاوا',
                                id: 8,
                                ParentId: 7,
                                nodes: null,
                            },
                            {
                                title: 'اجا',
                                id: 9,
                                ParentId: 7,
                                nodes: null,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'حفاظت',
                id: 10,
                parentId: 2,
                nodes: [
                    {
                        title: 'حفاظت بالا',
                        id: 11,
                        parentId: 10,
                        nodes: [
                            {
                                title: 'ساختمان یک',
                                id: 12,
                                parentId: 11,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان دو',
                                id: 13,
                                parentId: 11,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان سه',
                                id: 14,
                                parentId: 11,
                                nodes: null,
                            },
                        ],
                    },
                    {
                        title: 'حفاظت پایین',
                        id: 15,
                        parentId: 10,
                        nodes: [
                            {
                                title: 'ساختمان یک',
                                id: 16,
                                parentId: 15,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان دو',
                                id: 17,
                                parentId: 15,
                                nodes: null,
                            },
                            {
                                title: 'ساختمان سه',
                                id: 18,
                                parentId: 15,
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
