import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-fmcy30Ms.js";const l={},i=e(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>使用shell脚本安装Python环境</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><p>服务器业务初始化</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>避免人工多次安装，节省人工成本 避免人工错误，提高工作效率</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、获得软件包 2、源码安装 3、升级pip命令</p><h2 id="案例代码" tabindex="-1"><a class="header-anchor" href="#案例代码"><span>案例代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Description: python install from zutuanxue(http://www.zutuanxue.com)</span></span>
<span class="line"><span>#Release: python 3.7.6</span></span>
<span class="line"><span>#Auther: zutuanxue</span></span>
<span class="line"><span>#Email: </span></span>
<span class="line"><span>#OS: Centos 8.X</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#variables</span></span>
<span class="line"><span>python_download_url=https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz</span></span>
<span class="line"><span>python_source_pkg=Python-3.7.6.tgz</span></span>
<span class="line"><span>python_code=Python-3.7.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#functions</span></span>
<span class="line"><span>#安装前准备,安装必要依赖包</span></span>
<span class="line"><span>per_install () {</span></span>
<span class="line"><span>	if  ( ! yum -y install gcc-* openssl-* libffi-devel sqlite-devel &amp;&gt;/dev/null );then</span></span>
<span class="line"><span>	#if  ( ! yum -y install gcc-* openssl-* libffi-devel sqlite-devel ) &amp;&gt;/dev/null ;then</span></span>
<span class="line"><span>	echo -e &quot;\\033[31m network connection error,exit... \\033[0m&quot;</span></span>
<span class="line"><span>	exit 130</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装python</span></span>
<span class="line"><span>install () {</span></span>
<span class="line"><span>	#下载软件包</span></span>
<span class="line"><span>	wget $python_download_url</span></span>
<span class="line"><span>	#解压软件包</span></span>
<span class="line"><span>	if [ -f $python_source_pkg ];then</span></span>
<span class="line"><span>		tar xf $python_source_pkg</span></span>
<span class="line"><span>		[ $? -ne 0 ]&amp;&amp;echo &quot;$python_source_pkg unzip fail&quot;&amp;&amp;exit 1</span></span>
<span class="line"><span>		cd $python_code</span></span>
<span class="line"><span>		#配置,开启ssl支持https</span></span>
<span class="line"><span>		if ./configure --with-openssl=/usr/bin/openssl 1&gt;/dev/null;then</span></span>
<span class="line"><span>			#mv Modules/Setup Modules/Setup.bak</span></span>
<span class="line"><span>			cp -f ../Setup Modules/</span></span>
<span class="line"><span>			if make 1&gt;/dev/null;then</span></span>
<span class="line"><span>			#if make ;then</span></span>
<span class="line"><span>				if make install 1&gt;/dev/null;then</span></span>
<span class="line"><span>				#if make install ;then</span></span>
<span class="line"><span>					#if pip3 install --upgrade pip 1&gt;/dev/null;then</span></span>
<span class="line"><span>					#安装完成后更新pip</span></span>
<span class="line"><span>					if pip3 install --upgrade pip;then</span></span>
<span class="line"><span>						echo &quot;python install success&quot;</span></span>
<span class="line"><span>					else</span></span>
<span class="line"><span>						echo &quot;pip3 install fail&quot;</span></span>
<span class="line"><span>						exit 1</span></span>
<span class="line"><span>					fi</span></span>
<span class="line"><span>				else</span></span>
<span class="line"><span>					echo &quot;python install fail&quot;</span></span>
<span class="line"><span>					exit 1</span></span>
<span class="line"><span>				fi</span></span>
<span class="line"><span>			else</span></span>
<span class="line"><span>				echo &quot;python make fail&quot;</span></span>
<span class="line"><span>				exit 1</span></span>
<span class="line"><span>			fi</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			echo &quot;python configure fail&quot;</span></span>
<span class="line"><span>			exit</span></span>
<span class="line"><span>		fi</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		echo &quot;not found $python_source_pkg&quot;</span></span>
<span class="line"><span>		exit 1</span></span>
<span class="line"><span>	fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>per_install;install</span></span>
<span class="line"><span>rm -rf $python_code</span></span>
<span class="line"><span>rm -rf python_source_pkg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[i];function t(c,d){return a(),s("div",null,p)}const v=n(l,[["render",t],["__file","shell脚本案例-Python安装脚本.html.vue"]]),u=JSON.parse('{"path":"/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-Python%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC.html","title":"34-案例-Python安装脚本","lang":"zh-CN","frontmatter":{"title":"34-案例-Python安装脚本","order":34,"icon":"lightbulb","description":"案例需求 使用shell脚本安装Python环境 应用场景 服务器业务初始化 解决问题 避免人工多次安装，节省人工成本 避免人工错误，提高工作效率 脚本思路 1、获得软件包 2、源码安装 3、升级pip命令 案例代码","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/shell/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-Python%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"34-案例-Python安装脚本"}],["meta",{"property":"og:description","content":"案例需求 使用shell脚本安装Python环境 应用场景 服务器业务初始化 解决问题 避免人工多次安装，节省人工成本 避免人工错误，提高工作效率 脚本思路 1、获得软件包 2、源码安装 3、升级pip命令 案例代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"34-案例-Python安装脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"案例代码","slug":"案例代码","link":"#案例代码","children":[]}],"git":{},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"note/shell/shell脚本案例-Python安装脚本.md","autoDesc":true}');export{v as comp,u as data};
