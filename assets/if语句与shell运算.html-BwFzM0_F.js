import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,e as a}from"./app-yH_6ilSD.js";const l={},e=a(`<p>if是一个条件判断语句，判断的前提是得有个条件。so，条件就显得格外重要了，if中可以有哪些条件呢？接下来我们就来聊一聊if条件的问题。 我们在之前的课程中学习了shell的运算，有比较运算、逻辑运算、文件运算等，这些运算可以植入到if条件中吗？答案是肯定的，接下来我就给大家演示一下如何在if条件中植入shell运算条件</p><h2 id="一、与文件存在与否的判断" tabindex="-1"><a class="header-anchor" href="#一、与文件存在与否的判断"><span>一、与文件存在与否的判断</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-e	是否存在   不管是文件还是目录，只要存在，条件就成立</span></span>
<span class="line"><span>-f	是否为普通文件</span></span>
<span class="line"><span>-d	是否为目录</span></span>
<span class="line"><span>-S	socket</span></span>
<span class="line"><span>-p	pipe</span></span>
<span class="line"><span>-c	character</span></span>
<span class="line"><span>-b	block</span></span>
<span class="line"><span>-L	软link</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>文件权限相关的判断</strong></li></ul><div class="language-l line-numbers-mode" data-highlighter="shiki" data-ext="l" data-title="l" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-r	当前用户对其是否可读</span></span>
<span class="line"><span>-w	当前用户对其是否可写</span></span>
<span class="line"><span>-x	当前用户对其是否可执行</span></span>
<span class="line"><span>-u	是否有suid</span></span>
<span class="line"><span>-g	是否sgid</span></span>
<span class="line"><span>-k	是否有t位</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>两个文件的比较判断</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>file1 -nt  file2	比较file1是否比file2新	</span></span>
<span class="line"><span>file1 -ot  file2 	比较file1是否比file2旧</span></span>
<span class="line"><span>file1 -ef  file2	比较是否为同一个文件，或者用于判断硬连接，是否指向同一个inode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>整数之间的判断</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-eq	相等</span></span>
<span class="line"><span>-ne	不等</span></span>
<span class="line"><span>-gt	大于</span></span>
<span class="line"><span>-lt	小于</span></span>
<span class="line"><span>-ge   大于等于</span></span>
<span class="line"><span>-le	小于等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>浮点比较运算</span></span>
<span class="line"><span>比较两个浮点数字的大小</span></span>
<span class="line"><span>给脚本两个浮点数字   返回他两的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#思路</span></span>
<span class="line"><span>1、获得两个浮点数字</span></span>
<span class="line"><span>2、处理为整形</span></span>
<span class="line"><span>3、比较</span></span>
<span class="line"><span>4、输出</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>字符串之间的判断</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-z  是否为空字符串   		字符串长度为0，就成立</span></span>
<span class="line"><span>-n  是否为非空字符串    	只要字符串非空，就是成立</span></span>
<span class="line"><span>string1 == string2 		是否相等</span></span>
<span class="line"><span>string1 != string2 		不等</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#用户登录验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# cat if-6.sh </span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#1、交互式输入用户名 密码</span></span>
<span class="line"><span>read -p &quot;user: &quot; myuser</span></span>
<span class="line"><span>if [ -z &quot;$myuser&quot; ];then</span></span>
<span class="line"><span>	echo &quot;用户名为空&quot;</span></span>
<span class="line"><span>	exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#从外往里写</span></span>
<span class="line"><span>read -p &quot;password: &quot; mypw</span></span>
<span class="line"><span>if [ -n &quot;$mypw&quot; ];then</span></span>
<span class="line"><span>       #2、判断是否正确</span></span>
<span class="line"><span>         #2.1 判断用户名</span></span>
<span class="line"><span>	if [ $myuser == &quot;root&quot; ];then</span></span>
<span class="line"><span>	   #2.2判断密码</span></span>
<span class="line"><span>	   if [ $mypw == &quot;abc-123&quot; ];then</span></span>
<span class="line"><span>		   echo &quot;welcome root&quot;</span></span>
<span class="line"><span>	   else</span></span>
<span class="line"><span>		   echo &quot;密码错误&quot;</span></span>
<span class="line"><span>		   exit 1</span></span>
<span class="line"><span>	   fi</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span> 	else</span></span>
<span class="line"><span>     	 echo &quot;用户名错误&quot;</span></span>
<span class="line"><span>		exit 1</span></span>
<span class="line"><span>	fi		</span></span>
<span class="line"><span></span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>	echo &quot;密码不能为空&quot;</span></span>
<span class="line"><span>	exit 1</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>多重条件判断</strong></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">逻辑判断符号：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;&amp;  	(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 逻辑与</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) 		</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">两个条件同时满足，整个大条件为真</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">or</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 逻辑或</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)		</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">两个条件满足任意一个，整个大条件为真</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">！</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 	非运算</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#用户登录验证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@zutuanxue </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# cat if-6.sh </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#1、交互式输入用户名 密码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;user: &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> myuser</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-z</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$myuser</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">	echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;用户名为空&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">	exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#从外往里写</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;password: &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mypw</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$mypw</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">       #2、判断是否正确</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">         #2.1 判断用户名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#if [ $myuser == &quot;root&quot; ];then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	   #2.2判断密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	  # if [ $mypw == &quot;abc-123&quot; ];then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#	   echo &quot;welcome root&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	   #else</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#	   echo &quot;密码错误&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#	   exit 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#   fi</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> 	#else</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     	#	echo &quot;用户名错误&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#	exit 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">	#fi		</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$myuser</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ] &amp;&amp; [ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$mypw</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;abc-123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">		echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;welcome root&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">		echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;用户名或密码错误&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">		exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">	echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;密码不能为空&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">	exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、课后练习" tabindex="-1"><a class="header-anchor" href="#二、课后练习"><span>二、课后练习</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>练习题1、判断/tmp/tyschool目录，如果没有则创建它</span></span>
<span class="line"><span>练习题2、判断是否有/usr/bin/wget命令，没有则安装他</span></span>
<span class="line"><span>练习题3、判断当前用户是否为管理员，UID为0或者为root都算管理员</span></span>
<span class="line"><span>练习题4、打印物理内存使用率</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、学习视频" tabindex="-1"><a class="header-anchor" href="#三、学习视频"><span>三、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=47" target="_blank" rel="noopener noreferrer">视频：if与shell运算01</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=48" target="_blank" rel="noopener noreferrer">视频：if与shell运算02</a></p>`,17),t=[e];function p(h,d){return n(),i("div",null,t)}const c=s(l,[["render",p],["__file","if语句与shell运算.html.vue"]]),v=JSON.parse('{"path":"/note/shell/if%E8%AF%AD%E5%8F%A5%E4%B8%8Eshell%E8%BF%90%E7%AE%97.html","title":"12-if语句与shell运算","lang":"zh-CN","frontmatter":{"title":"12-if语句与shell运算","order":12,"icon":"lightbulb","description":"if是一个条件判断语句，判断的前提是得有个条件。so，条件就显得格外重要了，if中可以有哪些条件呢？接下来我们就来聊一聊if条件的问题。 我们在之前的课程中学习了shell的运算，有比较运算、逻辑运算、文件运算等，这些运算可以植入到if条件中吗？答案是肯定的，接下来我就给大家演示一下如何在if条件中植入shell运算条件 一、与文件存在与否的判断 文件...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/shell/if%E8%AF%AD%E5%8F%A5%E4%B8%8Eshell%E8%BF%90%E7%AE%97.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"12-if语句与shell运算"}],["meta",{"property":"og:description","content":"if是一个条件判断语句，判断的前提是得有个条件。so，条件就显得格外重要了，if中可以有哪些条件呢？接下来我们就来聊一聊if条件的问题。 我们在之前的课程中学习了shell的运算，有比较运算、逻辑运算、文件运算等，这些运算可以植入到if条件中吗？答案是肯定的，接下来我就给大家演示一下如何在if条件中植入shell运算条件 一、与文件存在与否的判断 文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12-if语句与shell运算\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一、与文件存在与否的判断","slug":"一、与文件存在与否的判断","link":"#一、与文件存在与否的判断","children":[]},{"level":2,"title":"二、课后练习","slug":"二、课后练习","link":"#二、课后练习","children":[]},{"level":2,"title":"三、学习视频","slug":"三、学习视频","link":"#三、学习视频","children":[]}],"git":{},"readingTime":{"minutes":2.93,"words":880},"filePathRelative":"note/shell/if语句与shell运算.md","autoDesc":true}');export{c as comp,v as data};
