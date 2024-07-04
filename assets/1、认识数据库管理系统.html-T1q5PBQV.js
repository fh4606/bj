import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as n,a as t}from"./app-yH_6ilSD.js";const a={},r=t("p",null,"数据库是指按照某些特定结构来存储数据资料的数据仓库。在当今这个大数据技术迅速 崛起的年",-1),i=t("p",null,"代，互联网上每天都会生成海量的数据信息，数据库技术也从初只能存储简单的 表格数据的单一集中存 储模式，发展到了现如今存储海量数据的大型分布式模式。在信息化 社会中，能够充分有效地管理和利 用各种数据，挖掘其中的价值，是进行科学研究与决策管 理的重要前提。同时，数据库技术也是管理信 息系统、办公自动化系统、决策支持系统等各 类信息系统的核心组成部分，是进行科学研究和决策管理 的重要技术手段。",-1),c=t("p",null,"数据库管理系统是一种能够对数据库中存放的数据进行建立、修改、删除、查找、维护 等操作的 软件程序。它通过把计算机中具体的物理数据转换成适合用户理解的抽象逻辑数据， 有效地降低数据库 管理的技术门槛，因此即便是从事 Linux 运维工作的工程师也可以对数据 库进行基本的管理操作。",-1),l=t("p",null,"既然是讲解数据库管理技术，就肯定绕不开 MySQL。 MySQL 是一款市场占有率非常高 的数据库管 理系统，技术成熟、配置步骤相对简单，而且具有良好的可扩展性。但是，由于 Oracle公司在2009年 收购了MySQL的母公司Sun，因此MySQL数据库项目也随之纳入Oracle 麾下，逐步演变为保持着开源 软件的身份，但又申请了多项商业专利的软件系统。开源软件 是全球黑客、极客、程序员等技术高手在 开源社区的大旗下的公共智慧结晶，自己的劳动成 果被其他公司商业化自然也伤了一大批开源工作者的 心，因此由 MySQL 项目创始者重新研 发了一款名为 MariaDB 的全新数据库管理系统。该软件当前由 开源社区进行维护，是 MySQL 的分支产品，而且几乎完全兼容 MySQL。",-1),s=t("p",null,"与此同时，由于各大公司之间存在着竞争关系或利益关系，外加 MySQL 在被收购之后 逐渐由开源 向闭源软转变，很多公司抛弃了 MySQL。当前，谷歌、维基百科等技术领域决定 将 MySQL 数据库上 的业务转移道 MariaDB 数据库， Linux 开源系统的领袖红帽公司也决定在 RHEL 7、CentOS 7 以及新 的 Fedora系统中，将 MariaDB 作为默认的数据库管理系统，而 且红帽公司更是首次将数据库知识加 入到了 RHCE 认证的考试内容中。随后，还有数十个常 见的 Linux 系统（如 openSUSE、Slackware等）也作出了同样的表态。",-1),p=t("p",null,"但是，坦白来讲，虽然 IT 行业巨头都决定采用 MariaDB 数据库管系统，这并不意味着 MariaDB 较 之于 MySQL 有明显的优势。相较于 MySQL ， MariaDB 数据库管理系统有了很多新鲜的扩展特性，例 如对微秒级别的 支持、线程池、子查询优化、进程报告等。",-1),E=[r,i,c,l,s,p];function _(d,m){return n(),o("div",null,E)}const u=e(a,[["render",_],["__file","1、认识数据库管理系统.html.vue"]]),y=JSON.parse('{"path":"/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/1%E3%80%81%E8%AE%A4%E8%AF%86%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html","title":"01-认识数据库","lang":"zh-CN","frontmatter":{"title":"01-认识数据库","order":1,"icon":"lightbulb","description":"数据库是指按照某些特定结构来存储数据资料的数据仓库。在当今这个大数据技术迅速 崛起的年 代，互联网上每天都会生成海量的数据信息，数据库技术也从初只能存储简单的 表格数据的单一集中存 储模式，发展到了现如今存储海量数据的大型分布式模式。在信息化 社会中，能够充分有效地管理和利 用各种数据，挖掘其中的价值，是进行科学研究与决策管 理的重要前提。同时，数据库...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/centos7/13%E3%80%81%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1/1%E3%80%81%E8%AE%A4%E8%AF%86%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-认识数据库"}],["meta",{"property":"og:description","content":"数据库是指按照某些特定结构来存储数据资料的数据仓库。在当今这个大数据技术迅速 崛起的年 代，互联网上每天都会生成海量的数据信息，数据库技术也从初只能存储简单的 表格数据的单一集中存 储模式，发展到了现如今存储海量数据的大型分布式模式。在信息化 社会中，能够充分有效地管理和利 用各种数据，挖掘其中的价值，是进行科学研究与决策管 理的重要前提。同时，数据库..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-认识数据库\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"note/centos7/13、数据库服务/1、认识数据库管理系统.md","autoDesc":true}');export{u as comp,y as data};
