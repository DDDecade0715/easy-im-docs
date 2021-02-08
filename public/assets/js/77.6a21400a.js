(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{633:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("下面是一个完整的配置样例")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("EasyIM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tx-im'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sdk_app_id'")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'1400306676'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sdkAppId")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'secret'")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3e373d1ef02ef192ee26c94760681cdf492b4b7f053fc16504d30a77a028e76d'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secret")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'identifier'")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 管理员账号")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'expire'")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 签名过期时间")]),t._v("\n        \n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名\n         * 使用自定义类名时，构造函数将会接收一个 `EasyWeChat\\Kernel\\Http\\Response` 实例\n         */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'response_type'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'array'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * 日志配置\n         *\n         * level: 日志级别, 可选为：\n         *         debug/info/notice/warning/error/critical/alert/emergency\n         * path：日志文件位置(绝对路径!!!)，要求可写权限\n         */")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'log'")]),t._v("           "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'dev'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认使用的 channel，生产环境可以改为下面的 prod")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'channels'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试环境")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'dev'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'driver'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'single'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path'")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/tmp/logs/easyim.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'level'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'debug'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生产环境")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'prod'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'driver'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'daily'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path'")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/tmp/logs/easyim.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'level'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'info'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * 接口请求相关配置，超时时间等，具体可用参数请参考：\n         * http://docs.guzzlephp.org/en/stable/request-config.html\n         *\n         * - retries: 重试次数，默认 1，指定当 http 请求失败时重试的次数。\n         * - retry_delay: 重试延迟间隔（单位：ms），默认 500\n         * - log_template: 指定 HTTP 日志模板，请参考：https://github.com/guzzle/guzzle/blob/master/src/MessageFormatter.php\n         */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'http'")]),t._v("          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'max_retries'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'retry_delay'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'timeout'")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'base_uri'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'https://console.tim.qq.com/v4/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$factory")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TencentIM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tx-im'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"日志配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[t._v("#")]),t._v(" 日志配置")]),t._v(" "),n("p",[t._v("你可以配置多个日志的 "),n("code",[t._v("channel")]),t._v(" ，每个 "),n("code",[t._v("channel")]),t._v(" 里的 "),n("code",[t._v("driver")]),t._v(" 对应不同的日志驱动，内置可用的 "),n("code",[t._v("driver")]),t._v(" 如下表：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("stack")])]),t._v(" "),n("td",[t._v("复合型，可以包含下面多种驱动的混合模式")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("single")])]),t._v(" "),n("td",[t._v("基于 "),n("code",[t._v("StreamHandler")]),t._v(" 的单一文件日志，参数有 "),n("code",[t._v("path")]),t._v("，"),n("code",[t._v("level")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("daily")])]),t._v(" "),n("td",[t._v("基于 "),n("code",[t._v("RotatingFileHandler")]),t._v(" 按日期生成日志文件，参数有 "),n("code",[t._v("path")]),t._v("，"),n("code",[t._v("level")]),t._v("，"),n("code",[t._v("days")]),t._v("(默认 7 天)")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("slack")])]),t._v(" "),n("td",[t._v("基于 "),n("code",[t._v("SlackWebhookHandler")]),t._v(" 的 Slack 组件，参数请参考源码："),n("a",{attrs:{href:"https://github.com/overtrue/wechat/blob/master/src/Kernel/Log/LogManager.php#L247",target:"_blank",rel:"noopener noreferrer"}},[t._v("LogManager.php"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("syslog")])]),t._v(" "),n("td",[t._v("基于 "),n("code",[t._v("SyslogHandler")]),t._v(" Monolog 驱动，参数有 "),n("code",[t._v("facility")]),t._v(" 默认为 "),n("code",[t._v("LOG_USER")]),t._v("，"),n("code",[t._v("level")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("errorlog")])]),t._v(" "),n("td",[t._v("记录日志到系统错误日志，基于 "),n("code",[t._v("ErrorLogHandler")]),t._v("，参数有 "),n("code",[t._v("type")]),t._v("，默认为 "),n("code",[t._v("ErrorLogHandler::OPERATING_SYSTEM")])])])])]),t._v(" "),n("h3",{attrs:{id:"自定义日志驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义日志驱动"}},[t._v("#")]),t._v(" 自定义日志驱动")]),t._v(" "),n("p",[t._v("由于日志使用的是 "),n("a",{attrs:{href:"https://github.com/Seldaek/monolog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monolog"),n("OutboundLink")],1),t._v("，所以，除了默认的文件式日志外，你可以自定义日志处理器：")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Monolog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Monolog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RotatingFileHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册自定义日志")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("logger")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mylog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RotatingFileHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'days'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("level")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("{info} 在你自定义的闭包函数中，可以使用 "),n("code",[t._v("EasyWeChat\\Kernel\\Log\\LogManager")]),t._v(" 中的方法，具体请查看 SDK 源代码。")])]),t._v(" "),n("p",[t._v("配置文件中在 "),n("code",[t._v("driver")]),t._v(" 部分即可使用你自定义的驱动了：")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'log'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'dev'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认使用的 channel，生产环境可以改为下面的 prod")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'channels'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试环境")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'dev'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'driver'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'mylog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/tmp/easywechat.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'level'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'debug'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'days'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);