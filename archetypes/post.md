---
title: "My 1st post"  # 文章的标题
date: 2020-09-15T11:30:03+00:00  # 文章的发布日期，格式为 ISO 8601（年-月-日T时:分:秒+时区）
# weight: 1  # 排序权重，用于指定在列表中的显示顺序，数字越小越靠前，注释掉表示不使用
# aliases: ["/first"]  # 别名，用于指定文章的URL路径别名，这样可以用不同的URL访问同一篇文章
tags: ["first"]  # 文章标签，用于分类或索引文章
author: "Me"  # 作者的名字，如果是多位作者，可以列为数组，例如 ["Me", "You"]
# author: ["Me", "You"] # 多作者示例，注释掉了，表示不使用这个字段
showToc: true  # 是否显示目录，通常用于长文章
TocOpen: false  # 目录是否默认展开，设置为true时目录在加载时展开
draft: false  # 是否是草稿，如果是草稿，设置为true，文章不会在网站上公开
hidemeta: false  # 是否隐藏文章的元数据（如作者、发布日期等），设置为true时隐藏
comments: false  # 是否启用文章评论功能
description: "Desc Text."  # 文章的简短描述，通常用于SEO或在社交媒体分享时显示
canonicalURL: "https://canonical.url/to/page"  # 文章的规范URL，用于SEO优化，指明原始来源
disableHLJS: true  # 是否禁用代码高亮功能，设置为true时禁用
disableShare: false  # 是否禁用分享功能，设置为true时禁用
disableHLJS: false  # 重复的disableHLJS字段，应该保留其中一个，通常这类设置用来控制代码高亮显示
hideSummary: false  # 是否隐藏文章摘要，设置为true时不显示文章摘要
searchHidden: true  # 是否将文章隐藏于搜索结果中
ShowReadingTime: true  # 是否显示阅读时间
ShowBreadCrumbs: true  # 是否显示面包屑导航（当前位置指示）
ShowPostNavLinks: true  # 是否显示文章上下导航链接（上一篇、下一篇）
ShowWordCount: true  # 是否显示字数统计
ShowRssButtonInSectionTermList: true  # 是否在分类页面显示RSS订阅按钮
UseHugoToc: true  # 是否使用Hugo自带的目录生成功能
cover:  # 封面图配置
    image: "<image path/url>"  # 封面图的路径或URL
    alt: "<alt text>"  # 封面图的替代文本，图片无法显示时使用
    caption: "<text>"  # 封面图的说明文本，会显示在图片下方
    relative: false  # 是否使用相对路径，如果是页面bundle，可以设置为true
    hidden: true  # 是否隐藏封面图，仅在当前页面隐藏，不影响其他页面
editPost:  # 编辑文章的链接配置
    URL: "https://github.com/<path_to_repo>/content"  # 编辑文章的GitHub仓库路径
    Text: "Suggest Changes"  # 编辑链接的显示文本
    appendFilePath: true  # 是否将文件路径附加到编辑链接中
---
