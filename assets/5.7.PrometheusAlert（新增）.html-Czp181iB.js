import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,d as a}from"./app-mt04-1UL.js";const i="/assets/2023-10-28_210331_6035040.9260436324917767-BRZeC1aM.png",l="/assets/2023-10-28_210332_1135430.8410103597418314-Ca9YPr8p.png",t={},r=a('<p>注：这节课学习更多的告警通知方式。钉钉、邮件、微信和之前学过的方式（二选一）</p><h1 id="一、环境介绍" tabindex="-1"><a class="header-anchor" href="#一、环境介绍"><span>一、环境介绍</span></a></h1><table id="a04f6509" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ue7a8a199" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ubac716eb" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u5ea54722" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u303e1a0f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="udb9c9d9f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue443ce0c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.60</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ub9778131" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u64a4619a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker方式安装的prometheus</span></p></td></tr></tbody></table><h2 id="_1、环境准备" tabindex="-1"><a class="header-anchor" href="#_1、环境准备"><span>1、环境准备</span></a></h2><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装docker</span></a></h3><p>略</p><h3 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose"><span>安装docker-compose</span></a></h3><p>略</p><h1 id="二、prometheusalert" tabindex="-1"><a class="header-anchor" href="#二、prometheusalert"><span>二、PrometheusAlert</span></a></h1><h2 id="_1、prometheusalert介绍" tabindex="-1"><a class="header-anchor" href="#_1、prometheusalert介绍"><span>1、PrometheusAlert介绍</span></a></h2><p><a href="https://github.com/feiyu563/PrometheusAlert" target="_blank" rel="noopener noreferrer">github地址</a></p><p>PrometheusAlert是开源的运维告警中心消息转发系统，支持主流的监控系统Prometheus、Zabbix，日志系统Graylog2，Graylog3、数据可视化系统Grafana、SonarQube。阿里云-云监控，以及所有支持WebHook接口的系统发出的预警消息，支持将收到的这些消息发送到钉钉，微信，email，飞书，腾讯短信，腾讯电话，阿里云短信，阿里云电话，华为短信，百度云短信，容联云电话，七陌短信，七陌语音，TeleGram，百度Hi(如流)等。</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、二进制安装-和docker安装二选一" tabindex="-1"><a class="header-anchor" href="#_2、二进制安装-和docker安装二选一"><span>2、二进制安装（和docker安装二选一）</span></a></h2><p><a href="https://github.com/feiyu563/PrometheusAlert/releases" target="_blank" rel="noopener noreferrer">获取最新的安装包地址</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#安装二进制安装包</span></span>
<span class="line"><span>wget https://github.com/feiyu563/PrometheusAlert/releases/download/v4.8.2/linux.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装解压工具</span></span>
<span class="line"><span>apt install unzip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#解压</span></span>
<span class="line"><span>unzip linux.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#移动并改名</span></span>
<span class="line"><span>mv linux/ /opt/prometheus/PrometheusAlert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#授权执行权限</span></span>
<span class="line"><span>chmod +x /opt/prometheus/PrometheusAlert/PrometheusAlert</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim /opt/prometheus/PrometheusAlert/conf/app.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改内容如下：具体根据实际修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#登录用户名</span></span>
<span class="line"><span>login_user=admin</span></span>
<span class="line"><span>#登录密码</span></span>
<span class="line"><span>login_password=password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#是否开启钉钉告警通道,可同时开始多个通道0为关闭,1为开启</span></span>
<span class="line"><span>open-dingding=1</span></span>
<span class="line"><span>#默认钉钉机器人地址</span></span>
<span class="line"><span>ddurl=https://oapi.dingtalk.com/robot/send?access_token=xxxxx</span></span>
<span class="line"><span>#是否开启 @所有人(0为关闭,1为开启)</span></span>
<span class="line"><span>dd_isatall=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#是否开启微信告警通道,可同时开始多个通道0为关闭,1为开启</span></span>
<span class="line"><span>open-weixin=1</span></span>
<span class="line"><span>#默认企业微信机器人地址</span></span>
<span class="line"><span>wxurl=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#是否开启飞书告警通道,可同时开始多个通道0为关闭,1为开启</span></span>
<span class="line"><span>open-feishu=1</span></span>
<span class="line"><span>#默认飞书机器人地址</span></span>
<span class="line"><span>fsurl=https://open.feishu.cn/open-apis/bot/hook/xxxxxxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个<code>prometheus</code>用户：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>useradd -M -s /usr/sbin/nologin prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更改<code>prometheusalert</code>文件夹权限：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>chown prometheus:prometheus -R /opt/prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建 systemd 服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/systemd/system/PrometheusAlert.service &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=prometheus-alert</span></span>
<span class="line"><span>Documentation=https://github.com/feiyu563/PrometheusAlert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>User=prometheus</span></span>
<span class="line"><span>Group=prometheus</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>WorkingDirectory=/opt/prometheus/PrometheusAlert</span></span>
<span class="line"><span>ExecStart=/opt/prometheus/PrometheusAlert/PrometheusAlert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 PrometheusAlert</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl start PrometheusAlert.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>加入到开机自启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl enable PrometheusAlert.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl status PrometheusAlert.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看 prometheusalert的日志以进行故障排除：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>journalctl -u PrometheusAlert.service -f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、docker安装-和二进制安装二选一-推荐" tabindex="-1"><a class="header-anchor" href="#_3、docker安装-和二进制安装二选一-推荐"><span>3、docker安装（和二进制安装二选一，推荐）</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git clone https://gitee.com/linge365/docker-compose.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd docker-compose/prometheus-alert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据持久化目录" tabindex="-1"><a class="header-anchor" href="#数据持久化目录"><span>数据持久化目录</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ls -l /var/lib/docker/volumes/prometheus-alert_prometheus_alert_data/_data/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>drwxr-xr-x 7 root root     4096 Jul 17 11:23 ./</span></span>
<span class="line"><span>drwx-----x 3 root root     4096 Jul 17 11:23 ../</span></span>
<span class="line"><span>drwxr-xr-x 2 root root     4096 Jul 18 17:03 conf/</span></span>
<span class="line"><span>drwxr-xr-x 2 root root     4096 Jul 17 11:23 db/</span></span>
<span class="line"><span>-rw-r--r-- 1 root root      980 Jun 24  2022 docker-entrypoint.sh</span></span>
<span class="line"><span>drwxr-xr-x 2 root root     4096 Jul 18 00:00 logs/</span></span>
<span class="line"><span>-rwxr-xr-x 1 root root 28720464 Jun 24  2022 PrometheusAlert*</span></span>
<span class="line"><span>drwxr-xr-x 4 root root     4096 Jul 17 11:23 static/</span></span>
<span class="line"><span>drwxr-xr-x 2 root root     4096 Jul 17 11:23 views/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h3><p>增加腾讯云、华为云、阿里云的短信，电话接收告警信息是修改配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim /var/lib/docker/volumes/prometheus-alert_prometheus_alert_data/_data/conf/app.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="重启prometheusalert" tabindex="-1"><a class="header-anchor" href="#重启prometheusalert"><span>重启PrometheusAlert</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker restart prometheus-alert</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4、prometheusalert-web管理" tabindex="-1"><a class="header-anchor" href="#_4、prometheusalert-web管理"><span>4、PrometheusAlert web管理</span></a></h2><h3 id="登录web" tabindex="-1"><a class="header-anchor" href="#登录web"><span>登录web</span></a></h3><p>登录地址：<a href="http://192.168.11.60:8080/login" target="_blank" rel="noopener noreferrer">http://192.168.11.60:8080/login</a></p><p>登录帐号密码在配置文件app.conf中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#登录用户名</span></span>
<span class="line"><span>login_user=admin</span></span>
<span class="line"><span>#登录密码</span></span>
<span class="line"><span>login_password=password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="告警测试" tabindex="-1"><a class="header-anchor" href="#告警测试"><span>告警测试</span></a></h3><ul><li>注意：点击告警测试后飞书、钉钉、微信都能正常接收到信息，表示之前的配置没有问题</li></ul><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5、alertmanager配置" tabindex="-1"><a class="header-anchor" href="#_5、alertmanager配置"><span>5、Alertmanager配置</span></a></h2><p>修改alertmanager/config.yml增加如下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>  # 全局报警组，这个参数是必选的</span></span>
<span class="line"><span>  receiver: prometheusalert-fs或prometheusalert-wx或prometheusalert-dd</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;prometheusalert-wx&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://10.0.0.60:8080/prometheusalert?type=wx&amp;tpl=prometheus-wx&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- name: &#39;prometheusalert-dd&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://10.0.0.60:8080/prometheusalert?type=dd&amp;tpl=prometheus-dd&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- name: &#39;prometheusalert-fs&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://10.0.0.60:8080/prometheusalert?type=fs&amp;tpl=prometheus-fs&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>url参数中 ddurl、wxurl、fsurl、phone、email、wxuser、wxparty、wxtag、groupid 等可不写，如不写这些参数，则会默认去读取配置文件中app.conf的对应参数发送消息。</p><p>重新加载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9093/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这样当Prometheus的告警规则触发时，会把告警信息发送给Alertmanager，Alertmanager根据配置把这个告警信息发送到指定的微信、钉钉、飞书、手机、短信上。</p><h2 id="_6、测试接收告警信息" tabindex="-1"><a class="header-anchor" href="#_6、测试接收告警信息"><span>6、测试接收告警信息</span></a></h2><p>手动发送告警消息给alertmanager</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>alerts1=&#39;[</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;labels&quot;: {</span></span>
<span class="line"><span>       &quot;alertname&quot;: &quot;DiskRunningFull&quot;,</span></span>
<span class="line"><span>       &quot;dev&quot;: &quot;sda1&quot;,</span></span>
<span class="line"><span>       &quot;instance&quot;: &quot;example1&quot;,</span></span>
<span class="line"><span>       &quot;severity&quot;: &quot;critical&quot;  </span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>     &quot;annotations&quot;: {</span></span>
<span class="line"><span>        &quot;description&quot;: &quot;The disk sda1 is running full&quot;,</span></span>
<span class="line"><span>        &quot;summary&quot;: &quot;please check the instance example1&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]&#39;</span></span>
<span class="line"><span>curl -XPOST -d&quot;$alerts1&quot; http://localhost:9093/api/v1/alerts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>钉钉，微信，飞书能接收到表示正常。</p>`,63),p=[r];function d(c,h){return n(),e("div",null,p)}const m=s(t,[["render",d],["__file","5.7.PrometheusAlert（新增）.html.vue"]]),v=JSON.parse('{"path":"/note/Prometheus/5.7.PrometheusAlert%EF%BC%88%E6%96%B0%E5%A2%9E%EF%BC%89.html","title":"5.7.PrometheusAlert（新增）","lang":"zh-CN","frontmatter":{"title":"5.7.PrometheusAlert（新增）","order":33,"icon":"lightbulb","description":"注：这节课学习更多的告警通知方式。钉钉、邮件、微信和之前学过的方式（二选一） 一、环境介绍 1、环境准备 安装docker 略 安装docker-compose 略 二、PrometheusAlert 1、PrometheusAlert介绍 github地址 PrometheusAlert是开源的运维告警中心消息转发系统，支持主流的监控系统Promet...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/5.7.PrometheusAlert%EF%BC%88%E6%96%B0%E5%A2%9E%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.7.PrometheusAlert（新增）"}],["meta",{"property":"og:description","content":"注：这节课学习更多的告警通知方式。钉钉、邮件、微信和之前学过的方式（二选一） 一、环境介绍 1、环境准备 安装docker 略 安装docker-compose 略 二、PrometheusAlert 1、PrometheusAlert介绍 github地址 PrometheusAlert是开源的运维告警中心消息转发系统，支持主流的监控系统Promet..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.7.PrometheusAlert（新增）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、环境准备","slug":"_1、环境准备","link":"#_1、环境准备","children":[{"level":3,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":3,"title":"安装docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}]},{"level":2,"title":"1、PrometheusAlert介绍","slug":"_1、prometheusalert介绍","link":"#_1、prometheusalert介绍","children":[]},{"level":2,"title":"2、二进制安装（和docker安装二选一）","slug":"_2、二进制安装-和docker安装二选一","link":"#_2、二进制安装-和docker安装二选一","children":[]},{"level":2,"title":"3、docker安装（和二进制安装二选一，推荐）","slug":"_3、docker安装-和二进制安装二选一-推荐","link":"#_3、docker安装-和二进制安装二选一-推荐","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"数据持久化目录","slug":"数据持久化目录","link":"#数据持久化目录","children":[]},{"level":3,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":3,"title":"重启PrometheusAlert","slug":"重启prometheusalert","link":"#重启prometheusalert","children":[]}]},{"level":2,"title":"4、PrometheusAlert web管理","slug":"_4、prometheusalert-web管理","link":"#_4、prometheusalert-web管理","children":[{"level":3,"title":"登录web","slug":"登录web","link":"#登录web","children":[]},{"level":3,"title":"告警测试","slug":"告警测试","link":"#告警测试","children":[]}]},{"level":2,"title":"5、Alertmanager配置","slug":"_5、alertmanager配置","link":"#_5、alertmanager配置","children":[]},{"level":2,"title":"6、测试接收告警信息","slug":"_6、测试接收告警信息","link":"#_6、测试接收告警信息","children":[]}],"git":{},"readingTime":{"minutes":4.61,"words":1384},"filePathRelative":"note/Prometheus/5.7.PrometheusAlert（新增）.md","autoDesc":true}');export{m as comp,v as data};
