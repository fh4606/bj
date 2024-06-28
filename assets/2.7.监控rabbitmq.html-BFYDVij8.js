import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,d as n}from"./app-mt04-1UL.js";const i="/assets/2023-10-28_202232_4928460.5495842907788178-BHEy7yzr.png",l="/assets/2023-10-28_202232_3157980.3417943973584434-fzbfidHN.png",t={},d=n(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="84b3eba5" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ub6e0bc87" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u324fc108" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u670004f8" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u7974d354" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u8e0c6671" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u513d011e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue3481b8a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u34ca06b0" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker安装的prometheus</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ufbfb1852" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">test</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ud16aaa25" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.62</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uc2b370b7" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue8947607" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">rabbitmq版本3.7.15，Docker 版本 23.0.1</span></p></td></tr></tbody></table><h2 id="_1、环境搭建" tabindex="-1"><a class="header-anchor" href="#_1、环境搭建"><span>1、环境搭建</span></a></h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>docker安装</span></a></h3><p>略</p><h3 id="docker-compose安装" tabindex="-1"><a class="header-anchor" href="#docker-compose安装"><span>docker-compose安装</span></a></h3><p>略</p><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span>rabbitmq</span></a></h3><p>已在监控nginx那节课安装好</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data/rabbitmq</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用cat创建文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt;docker-compose.yaml&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  rabbitmq:</span></span>
<span class="line"><span>    image: rabbitmq:3.7.15-management</span></span>
<span class="line"><span>    container_name: rabbitmq</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /data/rabbitmq/data:/var/lib/rabbitmq</span></span>
<span class="line"><span>      - /data/rabbitmq/log:/var/log/rabbitmq</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 5672:5672</span></span>
<span class="line"><span>      - 15672:15672</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="二、监控rabbitmq" tabindex="-1"><a class="header-anchor" href="#二、监控rabbitmq"><span>二、监控rabbitmq</span></a></h1><h2 id="_1、二进制安装-二选一" tabindex="-1"><a class="header-anchor" href="#_1、二进制安装-二选一"><span>1、二进制安装（二选一）</span></a></h2><p>rabbit_exporter下载地址: <a href="https://github.com/kbudde/rabbitmq_exporter/releases" target="_blank" rel="noopener noreferrer">https://github.com/kbudde/rabbitmq_exporter/releases</a></p><h3 id="下载二进制包解压并放入-opt目录" tabindex="-1"><a class="header-anchor" href="#下载二进制包解压并放入-opt目录"><span>下载二进制包解压并放入/opt目录</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/kbudde/rabbitmq_exporter/releases/download/v1.0.0-RC19/rabbitmq_exporter_1.0.0-RC19_linux_amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir /opt/prometheus/rabbitmq_exporter -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xvf rabbitmq_exporter_1.0.0-RC19_linux_amd64.tar.gz -C /opt/prometheus/rabbitmq_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>useradd -M -s /usr/sbin/nologin prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="更改exporter文件夹权限" tabindex="-1"><a class="header-anchor" href="#更改exporter文件夹权限"><span>更改exporter文件夹权限</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>chown prometheus:prometheus -R /opt/prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建-systemd-服务" tabindex="-1"><a class="header-anchor" href="#创建-systemd-服务"><span>创建 systemd 服务</span></a></h3><p>使用cat创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/systemd/system/rabbitmq_exporter.service &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=prometheus rabbitmq exporter</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Environment=RABBIT_USER=guest</span></span>
<span class="line"><span>Environment=RABBIT_PASSWORD=guest</span></span>
<span class="line"><span>Environment=RABBIT_URL=http://localhost:15672</span></span>
<span class="line"><span>OUTPUT_FORMAT=JSON</span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>User=prometheus</span></span>
<span class="line"><span>Group=prometheus</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>ExecStart=/opt/prometheus/rabbitmq_exporter/rabbitmq_exporter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl start rabbitmq_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加入到开机自启动" tabindex="-1"><a class="header-anchor" href="#加入到开机自启动"><span>加入到开机自启动</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl enable rabbitmq_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查"><span>检查</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl status rabbitmq_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动不了检查日志</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>journalctl -u rabbitmq_exporter.service -f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、docker安装-二选一" tabindex="-1"><a class="header-anchor" href="#_2、docker安装-二选一"><span>2、docker安装（二选一）</span></a></h2><h3 id="docker直接运行" tabindex="-1"><a class="header-anchor" href="#docker直接运行"><span>docker直接运行</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d --restart=always -p 9419:9419  --name rabbitmq_exporter -e RABBIT_URL=http://192.168.11.62:15672 -e RABBIT_USER=guest -e RABBIT_PASSWORD=guest kbudde/rabbitmq-exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker-compose方式" tabindex="-1"><a class="header-anchor" href="#docker-compose方式"><span>docker-compose方式</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;docker-compose.yaml &lt;&lt;EOF</span></span>
<span class="line"><span>version: &#39;3.3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  rabbitmq_exporter:</span></span>
<span class="line"><span>    image: kbudde/rabbitmq-exporter</span></span>
<span class="line"><span>    container_name: rabbitmq_exporter</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      RABBIT_URL: &quot;http://192.168.11.62:15672&quot;</span></span>
<span class="line"><span>      RABBIT_USER: &quot;guest&quot;</span></span>
<span class="line"><span>      RABBIT_PASSWORD: &quot;guest&quot;</span></span>
<span class="line"><span>      PUBLISH_PORT: &quot;9419&quot;</span></span>
<span class="line"><span>      OUTPUT_FORMAT: &quot;JSON&quot;</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;9419:9419&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker ps</span></span>
<span class="line"><span>或：</span></span>
<span class="line"><span>docker logs -f rabbitmq_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、参数解释" tabindex="-1"><a class="header-anchor" href="#_3、参数解释"><span>3、参数解释</span></a></h2><table id="464258dc" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="u94df1243" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Environment variable</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u2b92ac84" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">default</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u894ea34d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">description</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ua5ef808a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">RABBIT_URL</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u7b759306" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://127.0.0.1:15672/" data-href="http://127.0.0.1:15672/" target="_blank" class="ne-link"><span class="ne-text">http://127.0.0.1:15672</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="ud3497486" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">rabbitMQ管理插件的url（必须以http(s)://开头）</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ufa92b247" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">RABBIT_USER</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u96ac0100" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">guest</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="uf50a87a3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">rabbitMQ 管理插件的用户名。</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ubbcc4b72" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">RABBIT_PASSWORD</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u39390404" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">guest</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u5aaf9541" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">rabbitMQ 管理插件的密码。</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ue800805d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">OUTPUT_FORMAT</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u7bde0ca1" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">JSON</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u57dc6997" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">输出格式</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ub4c1a9b3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">PUBLISH_PORT</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u957a2161" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">9419</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="ue3f6e729" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">运行端口(监听端口)</span></p></td></tr></tbody></table><h2 id="_4、metrics地址" tabindex="-1"><a class="header-anchor" href="#_4、metrics地址"><span>4、metrics地址</span></a></h2><p>注：安装好Exporter后会暴露一个<code>http://ip:端口/metrics</code>的HTTP服务</p><table id="93a12995" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="u84c21222" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">名称</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u7eb9ca75" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">地址</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="uf82639a7" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">备注</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="uefff1256" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">rabbitmq_exporter</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="ud19d3b81" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://192.168.11.62:9419/metrics" data-href="http://192.168.11.62:9419/metrics" target="_blank" class="ne-link"><span class="ne-text">http://192.168.11.62:9419/metrics</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"></td></tr></tbody></table><h2 id="_5、prometheus配置" tabindex="-1"><a class="header-anchor" href="#_5、prometheus配置"><span>5、Prometheus配置</span></a></h2><p>配置prometheus去采集（拉取）rabbitmq_exporter的监控样本数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data/docker-prometheus </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在scrape_configs(搜刮配置):下面增加如下配置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &gt;&gt; prometheus/prometheus.yml &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span>  - job_name: &#39;rabbitmq_exporter&#39;</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;192.168.11.62:9419&#39;]</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        instance: test服务器</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查-1" tabindex="-1"><a class="header-anchor" href="#检查-1"><span>检查</span></a></h3><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6、常用的监控指标" tabindex="-1"><a class="header-anchor" href="#_6、常用的监控指标"><span>6、常用的监控指标</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rabbitmq_queue_messages_unacknowledged_global 队列中有未确认的消息总数（未被消费的消息）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rabbitmq_node_disk_free_limit  使用磁盘大小</span></span>
<span class="line"><span>rabbitmq_node_disk_free        磁盘总大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rabbitmq_node_mem_used        使用内存大小</span></span>
<span class="line"><span>rabbitmq_node_mem_limit       内存总大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rabbitmq_sockets_used         使用sockets的数量</span></span>
<span class="line"><span>rabbitmq_sockets_available    可用的sockets总数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rabbitmq_fd_used              使用文件描述符的数量</span></span>
<span class="line"><span>rabbitmq_fd_available         可用的文件描述符总数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、触发器配置-告警规则" tabindex="-1"><a class="header-anchor" href="#_7、触发器配置-告警规则"><span>7、触发器配置(告警规则)</span></a></h2><p>Prometheus配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 报警(触发器)配置</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  - &quot;alert.yml&quot;  </span></span>
<span class="line"><span>  - &quot;rules/*.yml&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq触发器-告警规则" tabindex="-1"><a class="header-anchor" href="#rabbitmq触发器-告警规则"><span>Rabbitmq触发器（告警规则）</span></a></h3><p>也是单节点，未配置集群触发器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; prometheus/rules/rabbitmq.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>groups:</span></span>
<span class="line"><span>- name: Rabbitmq</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  - alert: RabbitMQDown</span></span>
<span class="line"><span>    expr: rabbitmq_up != 1</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: High</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;Rabbitmq Down,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;Rabbitmq_exporter连不上RabbitMQ! ! !&quot;</span></span>
<span class="line"><span>  - alert: RabbitMQ有未确认消息</span></span>
<span class="line"><span>    expr: rabbitmq_queue_messages_unacknowledged_global  &gt; 0</span></span>
<span class="line"><span>    for: 1m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;RabbitMQ有未确认消息,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &#39;RabbitMQ未确认消息&gt;0,当前值为：{{ $value }}&#39;      </span></span>
<span class="line"><span>  - alert: RabbitMQ可用磁盘空间不足告警</span></span>
<span class="line"><span>    expr: rabbitmq_node_disk_free_alarm != 0</span></span>
<span class="line"><span>    #expr: rabbitmq_node_disk_free_limit / rabbitmq_node_disk_free *100 &gt; 90</span></span>
<span class="line"><span>    for: 0m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;RabbitMQ可用磁盘空间不足,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;RabbitMQ可用磁盘空间不足，请检查&quot;</span></span>
<span class="line"><span>  - alert: RabbitMQ可用内存不足告警</span></span>
<span class="line"><span>    expr: rabbitmq_node_mem_alarm != 0</span></span>
<span class="line"><span>    #expr: rabbitmq_node_mem_used / rabbitmq_node_mem_limit * 100 &gt; 90</span></span>
<span class="line"><span>    for: 0m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;RabbitMQ可用内存不足,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;RabbitMQ可用内存不足，请检查&quot;</span></span>
<span class="line"><span>  - alert: RabbitMQ_socket连接数使用过高告警</span></span>
<span class="line"><span>    expr: rabbitmq_sockets_used / rabbitmq_sockets_available * 100 &gt; 60</span></span>
<span class="line"><span>    for: 0m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;RabbitMQ_socket连接数使用过高,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &#39;RabbitMQ_sockets使用&gt;60%,当前值为：{{ $value }}&#39;</span></span>
<span class="line"><span>  - alert: RabbitMQ文件描述符使用过高告警</span></span>
<span class="line"><span>    expr: rabbitmq_fd_used / rabbitmq_fd_available * 100 &gt; 60</span></span>
<span class="line"><span>    for: 0m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;RabbitMQ文件描述符使用过高,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &#39;RabbitMQ文件描述符使用&gt;60%,当前值为：{{ $value }}&#39;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim prometheus/alert.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查配置" tabindex="-1"><a class="header-anchor" href="#检查配置"><span>检查配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker exec -it prometheus promtool check config /etc/prometheus/prometheus.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="重新加载配置" tabindex="-1"><a class="header-anchor" href="#重新加载配置"><span>重新加载配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查-2" tabindex="-1"><a class="header-anchor" href="#检查-2"><span>检查</span></a></h3><p><a href="http://192.168.11.61:9090/alerts?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/alerts?search=</a></p><p>或：</p><p><a href="http://192.168.11.61:9090/rules" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/rules</a></p><h2 id="_8、dashboard" tabindex="-1"><a class="header-anchor" href="#_8、dashboard"><span>8、dashboard</span></a></h2><p>grafana展示prometheus从rabbitmq_exporter收集到的的数据</p><p>id:<a href="https://grafana.com/grafana/dashboards/4279" target="_blank" rel="noopener noreferrer">4279</a></p><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',79),p=[d];function r(c,h){return a(),e("div",null,p)}const m=s(t,[["render",r],["__file","2.7.监控rabbitmq.html.vue"]]),u=JSON.parse('{"path":"/note/Prometheus/2.7.%E7%9B%91%E6%8E%A7rabbitmq.html","title":"2.7.监控rabbitmq","lang":"zh-CN","frontmatter":{"title":"2.7.监控rabbitmq","order":12,"icon":"lightbulb","description":"一、环境 1、环境搭建 docker安装 略 docker-compose安装 略 rabbitmq 已在监控nginx那节课安装好 使用cat创建文件 运行 二、监控rabbitmq 1、二进制安装（二选一） rabbit_exporter下载地址: https://github.com/kbudde/rabbitmq_exporter/releas...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/2.7.%E7%9B%91%E6%8E%A7rabbitmq.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"2.7.监控rabbitmq"}],["meta",{"property":"og:description","content":"一、环境 1、环境搭建 docker安装 略 docker-compose安装 略 rabbitmq 已在监控nginx那节课安装好 使用cat创建文件 运行 二、监控rabbitmq 1、二进制安装（二选一） rabbit_exporter下载地址: https://github.com/kbudde/rabbitmq_exporter/releas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.7.监控rabbitmq\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、环境搭建","slug":"_1、环境搭建","link":"#_1、环境搭建","children":[{"level":3,"title":"docker安装","slug":"docker安装","link":"#docker安装","children":[]},{"level":3,"title":"docker-compose安装","slug":"docker-compose安装","link":"#docker-compose安装","children":[]},{"level":3,"title":"rabbitmq","slug":"rabbitmq","link":"#rabbitmq","children":[]}]},{"level":2,"title":"1、二进制安装（二选一）","slug":"_1、二进制安装-二选一","link":"#_1、二进制安装-二选一","children":[{"level":3,"title":"下载二进制包解压并放入/opt目录","slug":"下载二进制包解压并放入-opt目录","link":"#下载二进制包解压并放入-opt目录","children":[]},{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"更改exporter文件夹权限","slug":"更改exporter文件夹权限","link":"#更改exporter文件夹权限","children":[]},{"level":3,"title":"创建 systemd 服务","slug":"创建-systemd-服务","link":"#创建-systemd-服务","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"加入到开机自启动","slug":"加入到开机自启动","link":"#加入到开机自启动","children":[]},{"level":3,"title":"检查","slug":"检查","link":"#检查","children":[]}]},{"level":2,"title":"2、docker安装（二选一）","slug":"_2、docker安装-二选一","link":"#_2、docker安装-二选一","children":[{"level":3,"title":"docker直接运行","slug":"docker直接运行","link":"#docker直接运行","children":[]},{"level":3,"title":"docker-compose方式","slug":"docker-compose方式","link":"#docker-compose方式","children":[]}]},{"level":2,"title":"3、参数解释","slug":"_3、参数解释","link":"#_3、参数解释","children":[]},{"level":2,"title":"4、metrics地址","slug":"_4、metrics地址","link":"#_4、metrics地址","children":[]},{"level":2,"title":"5、Prometheus配置","slug":"_5、prometheus配置","link":"#_5、prometheus配置","children":[{"level":3,"title":"检查","slug":"检查-1","link":"#检查-1","children":[]}]},{"level":2,"title":"6、常用的监控指标","slug":"_6、常用的监控指标","link":"#_6、常用的监控指标","children":[]},{"level":2,"title":"7、触发器配置(告警规则)","slug":"_7、触发器配置-告警规则","link":"#_7、触发器配置-告警规则","children":[{"level":3,"title":"Rabbitmq触发器（告警规则）","slug":"rabbitmq触发器-告警规则","link":"#rabbitmq触发器-告警规则","children":[]},{"level":3,"title":"检查配置","slug":"检查配置","link":"#检查配置","children":[]},{"level":3,"title":"重新加载配置","slug":"重新加载配置","link":"#重新加载配置","children":[]},{"level":3,"title":"检查","slug":"检查-2","link":"#检查-2","children":[]}]},{"level":2,"title":"8、dashboard","slug":"_8、dashboard","link":"#_8、dashboard","children":[]}],"git":{},"readingTime":{"minutes":7.33,"words":2198},"filePathRelative":"note/Prometheus/2.7.监控rabbitmq.md","autoDesc":true}');export{m as comp,u as data};
