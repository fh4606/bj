import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-DZWWIkr0.js";const l="/bj/assets/image-20230912094736597-DON5T0OC.png",t="/bj/assets/image-20230912094801666-CHbWqtoz.png",e="/bj/assets/image-20230912103001542-BcUntL07.png",h="/bj/assets/image-20230912103026611-B2jdsGQa.png",p={},k=n(`<h2 id="_1-使用dockerfile构建tomcat镜像" tabindex="-1"><a class="header-anchor" href="#_1-使用dockerfile构建tomcat镜像"><span>1.使用dockerfile构建tomcat镜像</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 镜像自己创建的</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supervisor:1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MAINTAINER</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zxw</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">zxw@xxjsjl.c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 把宿主机当前上下文的readme.txt拷贝到容器/usr/local/路径下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/cincontainer.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 把java和tomcat添加到容器中（会自动解压）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> jdk-8u201-linux-x64.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apache-tomcat-9.0.78.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置启动访问的初始位置，即工作目录，登录落脚点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MYPATH</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $MYPATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 配置java和tomcat的环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/jdk1.8.0_201</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> CLASSPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/lib/dt.jar:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/lib/tools.jar</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> CATALINE_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/apache-tomcat-9.0.78</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> CATALINE_BASE</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/apache-tomcat-9.0.78</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$CATALINE_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/lib:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$CATALINE_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8080</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 9001</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 容器启动后要执行的命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">CMD</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/apache-tomcat-9.0.78/bin/startup.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/apache-tomcat-9.0.78/bin/logs/catalina.out</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-启动容器" tabindex="-1"><a class="header-anchor" href="#_2-启动容器"><span>2.启动容器</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 tomcat]# docker run -itd --name supervisor_tomcat -p 8080:8080 -p 9001:9001 </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">--privileged</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> supervisor/tomcat:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/sbin/init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改supervisor服务，开放web做测试</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[inet_http_server]         ; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">inet</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (TCP) server disabled by default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">port</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">172.17.0.2:9001</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        ; (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ip_address:port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> specifier,</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> iface</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">username</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">              ; (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (open </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">password</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">               ; (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (open </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动tomcat服务</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@7e3176fd1279 etc]# /usr/local/apache-tomcat-9.0.78/bin/startup.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>测试tomcat服服务</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>测试supervisor服务</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-编写tomcat的supervisor子进程管理文件" tabindex="-1"><a class="header-anchor" href="#_3-编写tomcat的supervisor子进程管理文件"><span>3.编写tomcat的supervisor子进程管理文件</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@7e3176fd1279 supervisord.d]# vim tomcat.ini</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##程序名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[program:tomcat]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">directory</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/usr/local/apache-tomcat-9.0.78</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##程序运行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/usr/local/apache-tomcat-9.0.78/bin/catalina.sh</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> run</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##是否在supervisord启动后tomcat也启动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">autostart</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##启动10秒后没有异常退出，就表示进程正常启动了，默认为1秒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">startsecs</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">10</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启；意思为如果不是supervisord来关闭的该进程则认为不正当关闭，supervisord会再次把该进程给启动起来，只能使用该supervisorctl来进行关闭、启动、重启操作  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">autorestart</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##启动失败自动重试次数，默认是3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">startretries</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##用哪个用户启动进程，默认是root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">root</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##进程启动优先级，默认999，假Supervisord需要管理多个进程，那么值小的优先启动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">priority</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">999</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stopsignal</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">INT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##把stderr重定向到stdout标准输出，默认false     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">redirect_stderr</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##stdout标准输出日志文件大小，日志文件大小到200M后则进行切割，切割后的日志文件会标示为catalina.out1,catalina.out2,catalina.out3...，默认50MB                  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stdout_logfile_maxbytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">200MB</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##stdout标准输出日志文件备份数，保存100个200MB的日志文件，超过100个后老的将被删除，默认为10保存10个                         </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stdout_logfile_backups</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##标准日志输出位置，如果输出位置不存在则会启动失败                            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stdout_logfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/usr/local/apache-tomcat-9.0.78/logs/catalina.out</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##默认为false,进程被杀死时，是否向这个进程组发送stop信号，包括子进程  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stopasgroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##默认为false，向进程组发送kill信号，包括子进程                                       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">killasgroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##java环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">JAVA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/usr/local/jdk1.8.0_201&quot;,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">JAVA_BIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/usr/local/jdk1.8.0_201/bin&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-测试" tabindex="-1"><a class="header-anchor" href="#_4-测试"><span>4.测试</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>停止掉tomcat服务，查看完页面之后记得把所有的tomcat进程停止掉，因为你使用supervisor所以当你进入supervisorctl命令行中的时候会有start命令你需要在命令行中执行。{切记：supervisor的进程只能由supervisor来开启}</span></span>
<span class="line"><span>[root@7e3176fd1279 bin]# shutdown.sh   </span></span>
<span class="line"><span>Using CATALINA_BASE:   /usr/local/apache-tomcat-9.0.78</span></span>
<span class="line"><span>Using CATALINA_HOME:   /usr/local/apache-tomcat-9.0.78</span></span>
<span class="line"><span>Using CATALINA_TMPDIR: /usr/local/apache-tomcat-9.0.78/temp</span></span>
<span class="line"><span>Using JRE_HOME:        /usr/local/jdk1.8.0_201</span></span>
<span class="line"><span>Using CLASSPATH:       /usr/local/apache-tomcat-9.0.78/bin/bootstrap.jar:/usr/local/apache-tomcat-9.0.78/bin/tomcat-juli.jar</span></span>
<span class="line"><span>Using CATALINA_OPTS:   </span></span>
<span class="line"><span>[root@7e3176fd1279 bin]# pwd</span></span>
<span class="line"><span>/usr/local/apache-tomcat-9.0.78/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载supervisor服务</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@7e3176fd1279 supervisord.d]# supervisorctl update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tomcat:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> added</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> process</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> group</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器查看supervisor服务和tomcat服务</p><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用web界面管理tomcat服务（停止、启动等），略</p>',22),r=[k];function d(c,o){return a(),i("div",null,r)}const u=s(p,[["render",d],["__file","05.html.vue"]]),v=JSON.parse('{"path":"/note/supervisord/05.html","title":"05-管理tomcat","lang":"zh-CN","frontmatter":{"title":"05-管理tomcat","order":5,"icon":"lightbulb","description":"1.使用dockerfile构建tomcat镜像 2.启动容器 修改supervisor服务，开放web做测试 启动tomcat服务 测试tomcat服服务 测试supervisor服务 3.编写tomcat的supervisor子进程管理文件 4.测试 重新加载supervisor服务 浏览器查看supervisor服务和tomcat服务 使用web...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/supervisord/05.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"05-管理tomcat"}],["meta",{"property":"og:description","content":"1.使用dockerfile构建tomcat镜像 2.启动容器 修改supervisor服务，开放web做测试 启动tomcat服务 测试tomcat服服务 测试supervisor服务 3.编写tomcat的supervisor子进程管理文件 4.测试 重新加载supervisor服务 浏览器查看supervisor服务和tomcat服务 使用web..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-管理tomcat\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1.使用dockerfile构建tomcat镜像","slug":"_1-使用dockerfile构建tomcat镜像","link":"#_1-使用dockerfile构建tomcat镜像","children":[]},{"level":2,"title":"2.启动容器","slug":"_2-启动容器","link":"#_2-启动容器","children":[]},{"level":2,"title":"3.编写tomcat的supervisor子进程管理文件","slug":"_3-编写tomcat的supervisor子进程管理文件","link":"#_3-编写tomcat的supervisor子进程管理文件","children":[]},{"level":2,"title":"4.测试","slug":"_4-测试","link":"#_4-测试","children":[]}],"git":{},"readingTime":{"minutes":2.82,"words":845},"filePathRelative":"note/supervisord/05.md","autoDesc":true}');export{u as comp,v as data};