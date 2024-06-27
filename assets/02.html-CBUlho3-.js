import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-cGHsJGw-.js";const h={},l=n(`<blockquote><p>说明：1.通过python-pip安装的是最新版的supervisor，该方式安装的需要手动配置主进程配置文件和子进程配置文件。</p><p>2.也可以通过yum安装</p></blockquote><h2 id="_1-启动一台基础镜像为centos7的容器" tabindex="-1"><a class="header-anchor" href="#_1-启动一台基础镜像为centos7的容器"><span>1.启动一台基础镜像为centos7的容器</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# docker run -itd --name supervisord  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">--privileged</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  centos:7</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/sbin/init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Unable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;centos:7&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> locally</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">7:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Pulling</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> library/centos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">2d473b07cdd5:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> complete</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Digest:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sha256:9d4bcbbb213dfd745b58be38b13b996ebb5ac315fe75711bd618426a630e0987</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Status:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Downloaded</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> newer</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> centos:7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">4cbc1518193f229d6c72d28e866dd8fcbad6b152c8ab30c8a0d75d377585a877</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# docker ps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">CONTAINER</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   IMAGE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      COMMAND</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">       CREATED</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          PORTS</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">     NAMES</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">4cbc1518193f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   centos:7</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   &quot;/bin/bash&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">             supervisord</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-容器下安装python工具" tabindex="-1"><a class="header-anchor" href="#_2-容器下安装python工具"><span>2.容器下安装python工具</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# docker exec -it supervisord bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# yum install wget -y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# rm -rf /etc/yum.repos.d/</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# wget http://mirrors.aliyun.com/repo/Centos-7.repo -O /etc/yum.repos.d/Centos-7.repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# yum -y install epel-release</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# yum -y install python-pip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装supervisord工具" tabindex="-1"><a class="header-anchor" href="#_3-安装supervisord工具"><span>3.安装supervisord工具</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## 使用pip命令安装supervisor工具</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# pip install supervisor </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Collecting</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  Downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://files.pythonhosted.org/packages/2c/7a/0ad3973941590c040475046fef37a2b08a76691e61aa59540828ee235a6e/supervisor-4.2.5-py2.py3-none-any.whl</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (319kB)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    100%</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">################################| 327kB 19kB/s </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Requirement</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> already</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> satisfied</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (use </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">--upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> upgrade</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): setuptools in /usr/lib/python2.7/site-packages (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Installing</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> collected</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> packages:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor-4.2.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 8.1.2,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> however</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 23.2.1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> available.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> consider</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> upgrading</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> via</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;pip install --upgrade pip&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> command.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## 查看supervisor是否安装成功，实质上是获取主配置文件里面的信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# echo_supervisord_conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sample</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> more</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> information</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> please</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> see:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">http://supervisord.org/configuration.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Notes:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Shell</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> expansion</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;~&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) is not supported.  Environment</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">variables</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> expanded</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> syntax:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;%(ENV_HOME)s&quot;.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Quotes</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> around</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supported,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> except</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> case</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> environment=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> options</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> shown</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> below.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Comments</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> have</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> leading</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> space:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;a=b ;comment&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;a=b;comment&quot;.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Command</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> truncated</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> looks</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> like</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> comment,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> e.g.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;    </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&quot;command=bash -c &#39;foo ; bar&#39;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> truncate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;command=bash -c &#39;foo &quot;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">………………</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">The</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [include] section can just contain the </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> setting.  This</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setting</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> multiple</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (separated </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">by</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> whitespace</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> or</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">newlines</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).  It can also contain wildcards.  The filenames are</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">interpreted</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> relative</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  Included</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">cannot</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> themselves.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;[include]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">files</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> relative/directory/</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-编写主配置文件信息及创建子配置文件目录" tabindex="-1"><a class="header-anchor" href="#_4-编写主配置文件信息及创建子配置文件目录"><span>4.编写主配置文件信息及创建子配置文件目录</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# echo_supervisord_conf </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /etc/supervisord.conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# mkdir /etc/supervisord.d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# ll /etc/ </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> super</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-r--r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  10607</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 03:18</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisord.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">      6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 03:19</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisord.d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>主配置文件可根据需求修改，比如开放web管理等</p></blockquote><h2 id="_5-启动服务" tabindex="-1"><a class="header-anchor" href="#_5-启动服务"><span>5.启动服务</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# supervisord -c /etc/supervisord.conf </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@4cbc1518193f /]# ps -ef</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">UID</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          PID</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    PPID</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  C</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> STIME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TTY</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          TIME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> CMD</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">           1</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 02:27</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pts/0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    00:00:00</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">         157</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 03:15</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pts/1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    00:00:00</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">         179</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 08:17</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pts/2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    00:00:00</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">         202</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       1</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 08:40</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        00:00:00</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/bin/python2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/bin/supervisord</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/supervisord.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">         203</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">     179</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 08:40</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pts/2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    00:00:00</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -ef</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),k=[l];function e(t,p){return a(),i("div",null,k)}const g=s(h,[["render",e],["__file","02.html.vue"]]),y=JSON.parse('{"path":"/note/supervisord/02.html","title":"02-使用pip安装","lang":"zh-CN","frontmatter":{"title":"02-使用pip安装","order":2,"icon":"lightbulb","description":"说明：1.通过python-pip安装的是最新版的supervisor，该方式安装的需要手动配置主进程配置文件和子进程配置文件。 2.也可以通过yum安装 1.启动一台基础镜像为centos7的容器 2.容器下安装python工具 3.安装supervisord工具 4.编写主配置文件信息及创建子配置文件目录 主配置文件可根据需求修改，比如开放web管...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/supervisord/02.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-使用pip安装"}],["meta",{"property":"og:description","content":"说明：1.通过python-pip安装的是最新版的supervisor，该方式安装的需要手动配置主进程配置文件和子进程配置文件。 2.也可以通过yum安装 1.启动一台基础镜像为centos7的容器 2.容器下安装python工具 3.安装supervisord工具 4.编写主配置文件信息及创建子配置文件目录 主配置文件可根据需求修改，比如开放web管..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-使用pip安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1.启动一台基础镜像为centos7的容器","slug":"_1-启动一台基础镜像为centos7的容器","link":"#_1-启动一台基础镜像为centos7的容器","children":[]},{"level":2,"title":"2.容器下安装python工具","slug":"_2-容器下安装python工具","link":"#_2-容器下安装python工具","children":[]},{"level":2,"title":"3.安装supervisord工具","slug":"_3-安装supervisord工具","link":"#_3-安装supervisord工具","children":[]},{"level":2,"title":"4.编写主配置文件信息及创建子配置文件目录","slug":"_4-编写主配置文件信息及创建子配置文件目录","link":"#_4-编写主配置文件信息及创建子配置文件目录","children":[]},{"level":2,"title":"5.启动服务","slug":"_5-启动服务","link":"#_5-启动服务","children":[]}],"git":{},"readingTime":{"minutes":1.99,"words":597},"filePathRelative":"note/supervisord/02.md","autoDesc":true}');export{g as comp,y as data};
