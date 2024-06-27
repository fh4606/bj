import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as e}from"./app-cGHsJGw-.js";const n="/vuepress/assets/2024-04-26_105506_5812060.5384883403665351-P58BITzK.png",l="/vuepress/assets/2024-04-26_105638_2743050.879059438277059-DBbm1gra.png",t="/vuepress/assets/2024-04-26_105654_9694490.4873767164484972-Bi0NGshB.png",h="/vuepress/assets/2024-04-26_105821_2037160.6355481900835972-CsQgaNIv.png",p="/vuepress/assets/2024-04-26_105857_6230070.6841313140012549-CU69YHGV.png",k={},r=e(`<h3 id="系统环境" tabindex="-1"><a class="header-anchor" href="#系统环境"><span>系统环境</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>系统版本：</span></span>
<span class="line"><span>root@fh:~# hostnamectl </span></span>
<span class="line"><span> Static hostname: fh</span></span>
<span class="line"><span>       Icon name: computer-vm</span></span>
<span class="line"><span>         Chassis: vm</span></span>
<span class="line"><span>      Machine ID: 01fe7d2016ea400a8a87f2460668450c</span></span>
<span class="line"><span>         Boot ID: 7b0dd720a76140b3a13b666014da61b1</span></span>
<span class="line"><span>  Virtualization: vmware</span></span>
<span class="line"><span>Operating System: Ubuntu 22.04.4 LTS              </span></span>
<span class="line"><span>          Kernel: Linux 6.5.0-28-generic</span></span>
<span class="line"><span>    Architecture: x86-64</span></span>
<span class="line"><span> Hardware Vendor: VMware, Inc.</span></span>
<span class="line"><span>  Hardware Model: VMware Virtual Platform</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker版本、docker-compose版本：</span></span>
<span class="line"><span>root@fh:~# docker -v</span></span>
<span class="line"><span>Docker version 24.0.5, build 24.0.5-0ubuntu1~22.04.1</span></span>
<span class="line"><span>root@fh:~# docker-compose -v</span></span>
<span class="line"><span>Docker Compose version v2.20.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker、docker-compose安装参考本文献前面的内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装"><span>开始安装</span></a></h3><p><strong>创建系统目录</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /data</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>上传源码到当前目录下</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poetize-docker-compose.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解压</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> poetize-docker-compose.zip</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">data</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetize-docker-compose.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将代码mv到/data目录下</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> data/public/</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /data/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>进入到博客系统目录</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:~#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /data/public/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  depoly.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  nginxForHttp.conf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  nginxForHttps.conf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetize</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetize-im-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetize-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetry.sql</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  ssl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入到docker目录中</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public/docker#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker-compose.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  Dockerfile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>检查语法并安装</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public/docker#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -q</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public/docker#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[+] Running 1/1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ✔</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Pulled</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                                           10.6s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[+] Building 1.1s (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">5/5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) FINISHED                                                                                                                                 docker:default</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; [poetize-server </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">internal]</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .dockerignore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                           0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> transferring</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> context:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 2B</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                            0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; [poetize-server </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">internal]</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Dockerfile</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                        0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> transferring</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dockerfile:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 351B</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                       0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; [poetize-server </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">internal]</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> metadata</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.io/library/openjdk:8-jre-alpine</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                     1.1s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">CACHED</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [poetize-server </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">1/1]</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.io/library/openjdk:8-jre-alpine@sha256:f362b165b870ef129cbe730f29065ff37399c0aa8bcab3e44b51c302938c9193</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                        0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> resolve</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.io/library/openjdk:8-jre-alpine@sha256:f362b165b870ef129cbe730f29065ff37399c0aa8bcab3e44b51c302938c9193</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                              0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; [poetize-server] exporting to image                                                                                                                                    0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> exporting</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> layers</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                                    0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> writing</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sha256:dbb46e777c43e9ffc0deaa4a0e3a7091d06710534611ff01cf3912db0d8ef861</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                               0.0s</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> naming</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker.io/library/docker-poetize-server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                   0.0s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[+] Running 3/3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ✔</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pz-mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        Started</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                       0.1s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ✔</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pz-nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        Started</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">                                                                                                                                       0.0s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ✔</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Container</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> poetize-server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  Started</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用数据库连接软件导入数据库</strong></p><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>重启poetize-server容器</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public/docker#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> poetize-server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poetize-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>检查容器日志</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">root@fh:/data/public/docker#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  poetize-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>出现如下即为正常 <img src="`+h+'" alt="" loading="lazy"></p><p><strong>测试访问</strong></p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="其它说明" tabindex="-1"><a class="header-anchor" href="#其它说明"><span>其它说明</span></a></h3><p><code>博客项目地址：</code>https://gitee.com/littledokey/poetize <code>博客网址：</code>https://poetize.cn/</p><h3 id="源码包群里私信。" tabindex="-1"><a class="header-anchor" href="#源码包群里私信。"><span>源码包群里私信。</span></a></h3>',33),d=[r];function g(c,o){return a(),i("div",null,d)}const v=s(k,[["render",g],["__file","09.html.vue"]]),F=JSON.parse('{"path":"/note/docker/09.html","title":"09-部署最美博客系统","lang":"zh-CN","frontmatter":{"title":"09-部署最美博客系统","order":9,"icon":"lightbulb","description":"系统环境 开始安装 创建系统目录 上传源码到当前目录下 解压 将代码mv到/data目录下 进入到博客系统目录 进入到docker目录中 检查语法并安装 使用数据库连接软件导入数据库 重启poetize-server容器 检查容器日志 出现如下即为正常 测试访问 其它说明 博客项目地址：https://gitee.com/littledokey/poe...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/docker/09.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"09-部署最美博客系统"}],["meta",{"property":"og:description","content":"系统环境 开始安装 创建系统目录 上传源码到当前目录下 解压 将代码mv到/data目录下 进入到博客系统目录 进入到docker目录中 检查语法并安装 使用数据库连接软件导入数据库 重启poetize-server容器 检查容器日志 出现如下即为正常 测试访问 其它说明 博客项目地址：https://gitee.com/littledokey/poe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-部署最美博客系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"系统环境","slug":"系统环境","link":"#系统环境","children":[]},{"level":3,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[]},{"level":3,"title":"其它说明","slug":"其它说明","link":"#其它说明","children":[]},{"level":3,"title":"源码包群里私信。","slug":"源码包群里私信。","link":"#源码包群里私信。","children":[]}],"git":{},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"note/docker/09.md","autoDesc":true}');export{v as comp,F as data};
