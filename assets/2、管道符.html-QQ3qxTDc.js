import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,d as a}from"./app-Bna6fuy1.js";const s="/assets/1695613207.555747-BNn5RG3T.jpeg",n="/assets/1695613207.5666666-CKvwJgMs.jpeg",i="/assets/1695613207.5780697-BbWdOsVh.jpeg",r={},p=a('<h3 id="_1、概念-把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入-说白了就是后一-个命令在前一个命令执行完成后的基础上接着执行-其命令格式为-命令a-命令b-。" tabindex="-1"><a class="header-anchor" href="#_1、概念-把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入-说白了就是后一-个命令在前一个命令执行完成后的基础上接着执行-其命令格式为-命令a-命令b-。"><span>1、概念：把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入，说白了就是后一 个命令在前一个命令执行完成后的基础上接着执行，其命令格式为： “命令A|命令B”。</span></a></h3><h4 id="实例1-我们通过grep匹配相关文本命令-我们通过搜索-etc目录下的passwd文件中的关键-词-sbin-nlolgin-找出被限制登录的用户有多少个" tabindex="-1"><a class="header-anchor" href="#实例1-我们通过grep匹配相关文本命令-我们通过搜索-etc目录下的passwd文件中的关键-词-sbin-nlolgin-找出被限制登录的用户有多少个"><span>实例1：我们通过grep匹配相关文本命令，我们通过搜索/etc目录下的passwd文件中的关键 词“/sbin/nlolgin”找出被限制登录的用户有多少个：</span></a></h4><p>[root@host-172-16-0-115 ~]# grep &quot;/sbin/nologin&quot; /etc/passwd | wc -l</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过查找我们发现在passwd中我们一共有15个用户被限制登录。</p><h4 id="实例2-翻页式的查看-etc目录下所有文件的权限及属性问题" tabindex="-1"><a class="header-anchor" href="#实例2-翻页式的查看-etc目录下所有文件的权限及属性问题"><span>实例2：翻页式的查看/etc目录下所有文件的权限及属性问题：</span></a></h4><p>[root@host-172-16-0-115 ~]# ls -l /etc/ | more</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实例3-在修改密码时我们通常要输入两次新密码进行确认-在编写脚本的时候将是一个致命的缺陷-我们通过管道符和passwd命令的-stdin参数相结合-我们可以用一条命令来完成重置操作" tabindex="-1"><a class="header-anchor" href="#实例3-在修改密码时我们通常要输入两次新密码进行确认-在编写脚本的时候将是一个致命的缺陷-我们通过管道符和passwd命令的-stdin参数相结合-我们可以用一条命令来完成重置操作"><span>实例3：在修改密码时我们通常要输入两次新密码进行确认，在编写脚本的时候将是一个致命的缺陷， 我们通过管道符和passwd命令的--stdin参数相结合，我们可以用一条命令来完成重置操作：</span></a></h4><p>[root@host-172-16-0-115 ~]# echo &quot;0000&quot; | passwd --stdin root</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明： root为用户名。echo作用输入到屏幕，本例是将密码： 0000，输入到屏幕。</p><p>总结：学员不要局限于“命令A|命令B”，我们可以完全扩展使用，例如： “命令A|命令B|命令C| … …”</p>',13),c=[p];function l(d,h){return o(),e("div",null,c)}const _=t(r,[["render",l],["__file","2、管道符.html.vue"]]),E=JSON.parse('{"path":"/note/centos7/3%E3%80%81%E7%AE%A1%E9%81%93%E7%AC%A6%E3%80%81%E9%87%8D%E5%AE%9A%E5%90%91/2%E3%80%81%E7%AE%A1%E9%81%93%E7%AC%A6.html","title":"02-管道符","lang":"zh-CN","frontmatter":{"title":"02-管道符","order":2,"icon":"lightbulb","description":"1、概念：把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入，说白了就是后一 个命令在前一个命令执行完成后的基础上接着执行，其命令格式为： “命令A|命令B”。 实例1：我们通过grep匹配相关文本命令，我们通过搜索/etc目录下的passwd文件中的关键 词“/sbin/nlolgin”找出被限制登录的用户有多少个： [root@hos...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/centos7/3%E3%80%81%E7%AE%A1%E9%81%93%E7%AC%A6%E3%80%81%E9%87%8D%E5%AE%9A%E5%90%91/2%E3%80%81%E7%AE%A1%E9%81%93%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-管道符"}],["meta",{"property":"og:description","content":"1、概念：把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入，说白了就是后一 个命令在前一个命令执行完成后的基础上接着执行，其命令格式为： “命令A|命令B”。 实例1：我们通过grep匹配相关文本命令，我们通过搜索/etc目录下的passwd文件中的关键 词“/sbin/nlolgin”找出被限制登录的用户有多少个： [root@hos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-管道符\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、概念：把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入，说白了就是后一 个命令在前一个命令执行完成后的基础上接着执行，其命令格式为： “命令A|命令B”。","slug":"_1、概念-把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入-说白了就是后一-个命令在前一个命令执行完成后的基础上接着执行-其命令格式为-命令a-命令b-。","link":"#_1、概念-把前一个命令原本要输出到屏幕的标准数据当做是后一个命令的标准输入-说白了就是后一-个命令在前一个命令执行完成后的基础上接着执行-其命令格式为-命令a-命令b-。","children":[]}],"git":{},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"note/centos7/3、管道符、重定向/2、管道符.md","autoDesc":true}');export{_ as comp,E as data};
