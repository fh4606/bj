import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-CdRwZrpj.js";const l="/assets/image-20230914151104562-DLcBMJeQ.png",e="/assets/image-20230914173354227-BHr_oxiP.png",t={},h=n(`<h2 id="_1-启动一个容器-安装mysql服务" tabindex="-1"><a class="header-anchor" href="#_1-启动一个容器-安装mysql服务"><span>1.启动一个容器，安装mysql服务</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 mysql]# docker run -itd --name mysql -p 3306:3306 -p 9001:9001 --cpus 4 </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">--privileged</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /sys/fs/cgroup:/sys/fs/cgroup:ro</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  supervisor/os7:1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/sbin/init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-安装mysql服务" tabindex="-1"><a class="header-anchor" href="#_2-安装mysql服务"><span>2.安装mysql服务</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##基本登录安装配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@172-0-110-100 mysql]# docker exec -it mysql bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@0b2f26503c2f </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# ./root/supervisor_startup.sh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@0b2f26503c2f </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# yum -y install https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://repo.mysql.com/RPM-GPG-KEY-mysql-2022</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@0b2f26503c2f </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]# yum -y install mysql-community-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##启动mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@ed9f9ab6938d mysql]# systemctl start mysqld</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@ed9f9ab6938d mysql]# systemctl status mysqld</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysqld.service</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">   Loaded:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> loaded</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (/usr/lib/systemd/system/mysqld.service; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vendor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> preset:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">   Active:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> active</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (running) since Thu 2023-09-14 07:00:22 UTC; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">13s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ago</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">     Docs:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> man:mysqld</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">           http://dev.mysql.com/doc/refman/en/using-systemd.html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  Process:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 523</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ExecStart=/usr/sbin/mysqld</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --daemonize</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pid-file=/var/run/mysqld/mysqld.pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $MYSQLD_OPTS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (code=exited, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">status=0/SUCCESS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  Process:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 469</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ExecStartPre=/usr/bin/mysqld_pre_systemd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (code=exited, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">status=0/SUCCESS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Main</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> PID:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 525</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (mysqld)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">   CGroup:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /docker/ed9f9ab6938de0f84071378b406165854878cff0fdc6e59b7c2c8bf2851ae28c/system.slice/mysqld.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">           └─525</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/sbin/mysqld</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --daemonize</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pid-file=/var/run/mysqld/mysqld.pid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 07:00:07</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ed9f9ab6938d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemd[1]:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Starting</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Server...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 07:00:22</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ed9f9ab6938d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemd[1]:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Started</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Server.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">##配置mysql密码和远程访问权限等</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 查看临时密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@ed9f9ab6938d mysql]# grep </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;temporary password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /var/log/mysqld.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">2023-09-14T07:00:09.810730Z</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [Note] A temporary password is generated </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> root@localhost: a+or</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">H.Sk0)f  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#密码：a+or&gt;H.Sk0)f</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-#</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 登录并修改密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@ed9f9ab6938d mysql]#  mysql -uroot -p</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> password:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Welcome</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> monitor.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  Commands</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> end</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">or</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Your</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> connection</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Server</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> version:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 5.7.37-log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (c) 2000, 2022, Oracle and/or its affiliates.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Oracle</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> registered</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> trademark</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Oracle</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Corporation</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> and/or</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> its</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">affiliates.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Other</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> names</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> trademarks</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> their</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> respective</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">owners.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;help;&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;\\h&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> help.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;\\c&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clear</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> current</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> input</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> statement.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ALTER</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> IDENTIFIED</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> BY</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Ab123../&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #修改远程访问权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">select</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Host,User</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">update</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Host=&#39;%&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> where</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> User=&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">flush</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">grant</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;%&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> grant</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #重启mysql服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[root@ed9f9ab6938d mysql]# systemctl restart mysqld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试连接" tabindex="-1"><a class="header-anchor" href="#_3-测试连接"><span>3.测试连接</span></a></h2><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_6-2-编写基于supervisor的mysql子进程文件" tabindex="-1"><a class="header-anchor" href="#_6-2-编写基于supervisor的mysql子进程文件"><span>6.2.编写基于supervisor的mysql子进程文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>关闭mysql服务</span></span>
<span class="line"><span>[root@b08fad5067d7 mysql]# systemctl stop mysqld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>编写子进程管理文件</span></span>
<span class="line"><span>[root@b08fad5067d7 mysql]# vim /etc/supervisord.d/mysql.ini </span></span>
<span class="line"><span>[program:mysql]</span></span>
<span class="line"><span>directory=/usr/sbin/mysqld</span></span>
<span class="line"><span>command=/usr/sbin/mysqld</span></span>
<span class="line"><span>autostart=true</span></span>
<span class="line"><span>startsecs=10</span></span>
<span class="line"><span>autorestart=true </span></span>
<span class="line"><span>startretries=3 </span></span>
<span class="line"><span>user=mysql</span></span>
<span class="line"><span>priority=999</span></span>
<span class="line"><span>stopsignal=INT</span></span>
<span class="line"><span>redirect_stderr=true</span></span>
<span class="line"><span>stdout_logfile_maxbytes=200MB</span></span>
<span class="line"><span>stdout_logfile_backups = 100</span></span>
<span class="line"><span>stdout_logfile=/var/log/supervisor/mysql.log</span></span>
<span class="line"><span>stopasgroup=true</span></span>
<span class="line"><span>killasgroup=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>启动supervisor程序</span></span>
<span class="line"><span>[root@b08fad5067d7 mysql]# supervisord -c /etc/supervisord.conf</span></span>
<span class="line"><span>[root@b08fad5067d7 mysql]# supervisorctl update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>浏览器测试</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),p=[h];function k(r,d){return a(),i("div",null,p)}const c=s(t,[["render",k],["__file","06.html.vue"]]),F=JSON.parse('{"path":"/note/supervisord/06.html","title":"06-管理mysql","lang":"zh-CN","frontmatter":{"title":"06-管理mysql","order":6,"icon":"lightbulb","description":"1.启动一个容器，安装mysql服务 2.安装mysql服务 3.测试连接 6.2.编写基于supervisor的mysql子进程文件","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/supervisord/06.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"06-管理mysql"}],["meta",{"property":"og:description","content":"1.启动一个容器，安装mysql服务 2.安装mysql服务 3.测试连接 6.2.编写基于supervisor的mysql子进程文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-管理mysql\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1.启动一个容器，安装mysql服务","slug":"_1-启动一个容器-安装mysql服务","link":"#_1-启动一个容器-安装mysql服务","children":[]},{"level":2,"title":"2.安装mysql服务","slug":"_2-安装mysql服务","link":"#_2-安装mysql服务","children":[]},{"level":2,"title":"3.测试连接","slug":"_3-测试连接","link":"#_3-测试连接","children":[]}],"git":{},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"note/supervisord/06.md","autoDesc":true}');export{c as comp,F as data};
