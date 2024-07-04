import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as l,e as a,a as s,f as n}from"./app-yH_6ilSD.js";const r={},t=a(`<p>有这样一个现实问题：一个班级学员信息系统，要求存储学员ID、NAME、SCORE、AGE、GENDER，班级有50个人，思考如何解决交互中数据存储的问题。很多人可能直接说或定义变量接收数据不就行了！nice，你很棒！！ 解决方案如下： 1）每个学生通过5个变量，一个班级50个学生，5*50=250，妥妥的！我定义250个变量接收就可以了，美美哒！</p><p>兄弟，现在不是全班了是全校的学生需要录入你这个信息系统，你写变量吧！！当我提出这个需求的时候，作为开发你会不会想骂娘呢？</p><p>2）使用数组来定义，我只需要定义5个数组来接收所有用户的数据就可以了，5个数组就能解决一切，你觉得你会不会想了解下数组是什么呢？</p><h2 id="一、数组介绍" tabindex="-1"><a class="header-anchor" href="#一、数组介绍"><span>一、数组介绍</span></a></h2><p>数组可以让用户一次赋予多个值，需要读取数据时只需通过索引调用就可以方便读出了。</p><p>普通数组：只能使用整数作为数组索引(元素的索引) 关联数组：可以使用字符串作为数组索引(元素的索引)</p><h2 id="二、数组定义" tabindex="-1"><a class="header-anchor" href="#二、数组定义"><span>二、数组定义</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>				数组名称=(元素1 元素2 元素3 ...)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三、数组赋值方式" tabindex="-1"><a class="header-anchor" href="#三、数组赋值方式"><span>三、数组赋值方式</span></a></h2><ul><li>一次附一个值</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>变量名=变量值</span></span>
<span class="line"><span>array[0]=v1</span></span>
<span class="line"><span>array[1]=v2</span></span>
<span class="line"><span>array[3]=v3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一次附多个值</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>array=(var1 var2 var3 var4)</span></span>
<span class="line"><span>array1=(\`cat /etc/passwd\`)			//将文件中每一行赋值给array1数组</span></span>
<span class="line"><span>array2=(\`ls /root\`)</span></span>
<span class="line"><span>array3=(harry amy jack &quot;Miss zhang&quot;)</span></span>
<span class="line"><span>array4=(1 2 3 4 &quot;hello world&quot; [10]=linux)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=s("p",{"数组名称[索引]":""},[n("四、数组取值 "),s("strong",null,"取值方式:"),n(" $")],-1),d=a(`<p><strong>索引:</strong> 默认情况下索引是指数组中的元素[存的值]在数组中的顺序，从0开始计数，关联数组除外。比如： array=(var1 var2 var3 var4) array数组中存有4个元素，分别是：var1 var2 var3 var4 那么我想取出var2这个元素，那么就得先看看他在数组中的位置，数组中的元素索引如下:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>		元素	var1 var2 var3 var4</span></span>
<span class="line"><span>		索引	0     1     2    3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=s("p",{"array[1]":""},"所以正确表示array数组中元素var2的方式是：$",-1),h=a(`<p><strong>数组取值练习</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>\${array[i]}  i表示元素的索引</span></span>
<span class="line"><span>使用@ 或 * 可以获取数组中的所有元素：</span></span>
<span class="line"><span>获取第一个元素</span></span>
<span class="line"><span>echo \${array[0]}</span></span>
<span class="line"><span>echo \${array[*]}			获取数组里的所有元素</span></span>
<span class="line"><span>echo \${#array[*]}			获取数组里所有元素个数</span></span>
<span class="line"><span>echo \${!array[@]}    	获取数组元素的索引索引</span></span>
<span class="line"><span>echo \${array[@]:1:2}    访问指定的元素；1代表从索引为1的元素开始获取；2代表获取后面几个元素</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、关联数组" tabindex="-1"><a class="header-anchor" href="#五、关联数组"><span>五、关联数组</span></a></h2><h3 id="_5-1-定义管理数组" tabindex="-1"><a class="header-anchor" href="#_5-1-定义管理数组"><span>5.1 定义管理数组</span></a></h3><p>关联数组使用首先需要申明该数组为关联数组，申明方式： declare -A 数组名称</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>首先声明关联数组</span></span>
<span class="line"><span>declare -A asso_array1</span></span>
<span class="line"><span>declare -A asso_array2</span></span>
<span class="line"><span>declare -A asso_array3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2关联数组赋值" tabindex="-1"><a class="header-anchor" href="#_5-2关联数组赋值"><span>5.2关联数组赋值</span></a></h3><ul><li>一次赋一个值</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>数组名[索引]=变量值</span></span>
<span class="line"><span>[root@zutuanxue ~]# asso_array1[linux]=one</span></span>
<span class="line"><span>[root@zutuanxue ~]# asso_array1[java]=two</span></span>
<span class="line"><span>[root@zutuanxue ~]# asso_array1[php]=three</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一次附多个值</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# asso_array2=([name1]=harry [name2]=jack [name3]=amy [name4]=&quot;Miss zhang&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看关联数组</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# declare -A</span></span>
<span class="line"><span>declare -A asso_array1=&#39;([php]=&quot;three&quot; [java]=&quot;two&quot; [linux]=&quot;one&quot; )&#39;</span></span>
<span class="line"><span>declare -A asso_array2=&#39;([name3]=&quot;amy&quot; [name2]=&quot;jack&quot; [name1]=&quot;harry&quot; [name4]=&quot;Miss zhang&quot; )&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理数组取值" tabindex="-1"><a class="header-anchor" href="#管理数组取值"><span>管理数组取值</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# echo \${asso_array1[linux]}</span></span>
<span class="line"><span>one</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${asso_array1[php]}</span></span>
<span class="line"><span>three</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${asso_array1[*]}</span></span>
<span class="line"><span>three two one</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${!asso_array1[*]}</span></span>
<span class="line"><span>php java linux</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${#asso_array1[*]}</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${#asso_array2[*]}</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo \${!asso_array2[*]}</span></span>
<span class="line"><span>name3 name2 name1 name4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、课堂练习" tabindex="-1"><a class="header-anchor" href="#六、课堂练习"><span>六、课堂练习</span></a></h2><h4 id="_2-1-写一个监控cpu-平均负载值的脚本" tabindex="-1"><a class="header-anchor" href="#_2-1-写一个监控cpu-平均负载值的脚本"><span>2.1 写一个监控CPU 平均负载值的脚本</span></a></h4><p><strong>案例需求</strong> 分别打印CPU 1min 5min 15min load负载值</p><p><strong>案例思路</strong></p><ul><li>1、如何取CPU负载值，有哪些命令</li><li>2、如果存储在内存中，变量、数组</li></ul><p><strong>案例步骤</strong></p><ul><li>1、收集cpu load 平均负载值到数组</li><li>2、打印输出对应的负载值</li></ul><p><strong>代码实现</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 打印cpu 1min 5min 15min的负载值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、收集负载值</span></span>
<span class="line"><span>cpu_load=(\`uptime|tr -s &quot; &quot;|cut -d &quot; &quot; -f9-11|tr &quot;,&quot; &quot; &quot;\`)</span></span>
<span class="line"><span>#2、输出负载值</span></span>
<span class="line"><span>echo &quot;CPU 1 min平均负载为: \${cpu_load[0]}&quot;</span></span>
<span class="line"><span>echo &quot;CPU 5 min平均负载为: \${cpu_load[1]}&quot;</span></span>
<span class="line"><span>echo &quot;CPU 15 min平均负载为: \${cpu_load[2]}&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码效果</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue day2]# sh cpu_load.sh </span></span>
<span class="line"><span>CPU 1 min平均负载为: 0.00</span></span>
<span class="line"><span>CPU 5 min平均负载为: 0.01</span></span>
<span class="line"><span>CPU 15 min平均负载为: 0.05</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[t,p,d,c,h];function u(v,b){return l(),i("div",null,o)}const k=e(r,[["render",u],["__file","shell 数组详解.html.vue"]]),y=JSON.parse('{"path":"/note/shell/shell%20%E6%95%B0%E7%BB%84%E8%AF%A6%E8%A7%A3.html","title":"10-shell数组详解","lang":"zh-CN","frontmatter":{"title":"10-shell数组详解","order":10,"icon":"lightbulb","description":"有这样一个现实问题：一个班级学员信息系统，要求存储学员ID、NAME、SCORE、AGE、GENDER，班级有50个人，思考如何解决交互中数据存储的问题。很多人可能直接说或定义变量接收数据不就行了！nice，你很棒！！ 解决方案如下： 1）每个学生通过5个变量，一个班级50个学生，5*50=250，妥妥的！我定义250个变量接收就可以了，美美哒！ 兄弟...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/shell/shell%20%E6%95%B0%E7%BB%84%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"10-shell数组详解"}],["meta",{"property":"og:description","content":"有这样一个现实问题：一个班级学员信息系统，要求存储学员ID、NAME、SCORE、AGE、GENDER，班级有50个人，思考如何解决交互中数据存储的问题。很多人可能直接说或定义变量接收数据不就行了！nice，你很棒！！ 解决方案如下： 1）每个学生通过5个变量，一个班级50个学生，5*50=250，妥妥的！我定义250个变量接收就可以了，美美哒！ 兄弟..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10-shell数组详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一、数组介绍","slug":"一、数组介绍","link":"#一、数组介绍","children":[]},{"level":2,"title":"二、数组定义","slug":"二、数组定义","link":"#二、数组定义","children":[]},{"level":2,"title":"三、数组赋值方式","slug":"三、数组赋值方式","link":"#三、数组赋值方式","children":[]},{"level":2,"title":"五、关联数组","slug":"五、关联数组","link":"#五、关联数组","children":[{"level":3,"title":"5.1 定义管理数组","slug":"_5-1-定义管理数组","link":"#_5-1-定义管理数组","children":[]},{"level":3,"title":"5.2关联数组赋值","slug":"_5-2关联数组赋值","link":"#_5-2关联数组赋值","children":[]},{"level":3,"title":"管理数组取值","slug":"管理数组取值","link":"#管理数组取值","children":[]}]},{"level":2,"title":"六、课堂练习","slug":"六、课堂练习","link":"#六、课堂练习","children":[]}],"git":{},"readingTime":{"minutes":3.58,"words":1074},"filePathRelative":"note/shell/shell 数组详解.md","autoDesc":true}');export{k as comp,y as data};
