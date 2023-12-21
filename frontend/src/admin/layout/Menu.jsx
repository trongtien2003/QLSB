export const MenuAdmin = [
    {
        name: "chuyến bay",
        link: "flight",
        child: [
            { name: "quản lý chuyến bay", link: "flight" },
            {
                name: "thêm chuyến bay",
                link: "flight/add",
            },
        ],
    },
    {
        name: "quản lý đặt vé",
        link: "booking",
        child: null,
    },
    {
        name: "người dùng",
        link: "user",
        child: [
            {
                name: "quản lý người dùng",
                link: "user",
            },
            {
                name: "thêm người dùng",
                link: "user/add",
            },
        ],
    },
    {
        name: "tỉnh thành",
        link: "province",
        child: [
            {
                name: "quản lý tỉnh thành",
                link: "province",
            },
            {
                name: "thêm tỉnh thành",
                link: "province/add",
            },
        ],
    },
    {
        name: "hãng bay",
        link: "airline",
        child: [
            {
                name: "quản lý hãng bay",
                link: "airline",
            },
            {
                name: "thêm hãng bay",
                link: "airline/add",
            },
        ],
    },
    {
        name: "danh mục",
        link: "category",
        child: [
            {
                name: "quản lý danh mục",
                link: "category",
            },
            {
                name: "thêm danh mục",
                link: "category/add",
            },
        ],
    },
    {
        name: "bài viết",
        link: "post",
        child: [
            {
                name: "quản lý bài viết",
                link: "post",
            },
            {
                name: "thêm bài viết",
                link: "post/add",
            },
        ],
    },
];
