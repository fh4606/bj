import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-CdRwZrpj.js";const i="/assets/2023-10-28_200436_4931500.9492903185811279-MljYJ11z.png",l="/assets/2023-10-28_200436_4500490.9740626065191668-B5vB7f3Y.png",p="/assets/2023-10-28_200436_4079000.42607774960660105-D52ZsS0A.png",d="/assets/2023-10-28_200436_7035680.1265356415979142-lrbFga8b.png",r="/assets/2023-10-28_200436_5987390.7530588414168596-3ym2bVIm.png",t="/assets/2023-10-28_200436_3886180.0528247689161736-Dq2st2mh.png",c="/assets/2023-10-28_200436_4927950.6312605833286533-D5wqLV5n.png",o="/assets/2023-10-28_200436_6457210.7790130322713757-C0dXh30P.png",m={},v=e(`<table id="7481d8a7" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="150" style="border:1px solid #d9d9d9;"><p id="ua03d0900" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="u0061a2ba" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="u782bccde" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">配置</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="ud87a3c8a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="u4e14875b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="150" style="border:1px solid #d9d9d9;"><p id="u6525302e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="ub437f97d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="u7607cef5" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">2核4g</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="u04923a7c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="150" style="border:1px solid #d9d9d9;"><p id="uf2f2477a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker版本23.0.1,docker-compose版本1.29.2</span></p></td></tr></tbody></table><h2 id="_1、环境准备" tabindex="-1"><a class="header-anchor" href="#_1、环境准备"><span>1、环境准备</span></a></h2><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h3><p>镜像加速</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装docker</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>export DOWNLOAD_URL=&quot;http://mirrors.163.com/docker-ce&quot;</span></span>
<span class="line"><span>curl -fsSL https://get.docker.com/ | sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker -v</span></span>
<span class="line"><span>或：</span></span>
<span class="line"><span>systemctl status docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose"><span>安装Docker-compose</span></a></h3><p>安装命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose</span></span>
<span class="line"><span>sudo chmod +x /usr/local/bin/docker-compose</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker-compose -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="二、docker-compose安装prometheus" tabindex="-1"><a class="header-anchor" href="#二、docker-compose安装prometheus"><span>二、Docker-compose安装Prometheus</span></a></h1><h2 id="_1、手动创建docker-compose和配置文件-二选一" tabindex="-1"><a class="header-anchor" href="#_1、手动创建docker-compose和配置文件-二选一"><span>1、手动创建docker-compose和配置文件（二选一）</span></a></h2><h3 id="创建prometheus监控的文件夹" tabindex="-1"><a class="header-anchor" href="#创建prometheus监控的文件夹"><span>创建prometheus监控的文件夹</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#切换到root用户</span></span>
<span class="line"><span>sudo -i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir /data/docker-prometheus -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir /data/docker-prometheus/{grafana,prometheus,alertmanager} -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /data/docker-prometheus/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建alertmanager的配置文件" tabindex="-1"><a class="header-anchor" href="#创建alertmanager的配置文件"><span>创建alertmanager的配置文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; alertmanager/config.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>global:</span></span>
<span class="line"><span>  #163服务器</span></span>
<span class="line"><span>  smtp_smarthost: &#39;smtp.163.com:465&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱</span></span>
<span class="line"><span>  smtp_from: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱用户名，也就是你的邮箱　　　　　</span></span>
<span class="line"><span>  smtp_auth_username: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱密码</span></span>
<span class="line"><span>  smtp_auth_password: &#39;your-password&#39;</span></span>
<span class="line"><span>  #进行tls验证</span></span>
<span class="line"><span>  smtp_require_tls: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>route:</span></span>
<span class="line"><span>  group_by: [&#39;alertname&#39;]</span></span>
<span class="line"><span>  # 当收到告警的时候，等待group_wait配置的时间，看是否还有告警，如果有就一起发出去</span></span>
<span class="line"><span>  group_wait: 10s</span></span>
<span class="line"><span>  #  如果上次告警信息发送成功，此时又来了一个新的告警数据，则需要等待group_interval配置的时间才可以发送出去</span></span>
<span class="line"><span>  group_interval: 10s</span></span>
<span class="line"><span>  # 如果上次告警信息发送成功，且问题没有解决，则等待 repeat_interval配置的时间再次发送告警数据</span></span>
<span class="line"><span>  repeat_interval: 10m</span></span>
<span class="line"><span>  # 全局报警组，这个参数是必选的</span></span>
<span class="line"><span>  receiver: email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;email&#39;</span></span>
<span class="line"><span>  #收邮件的邮箱</span></span>
<span class="line"><span>  email_configs:</span></span>
<span class="line"><span>  - to: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>    #当告警恢复后，是否发送邮件</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span> - source_match:</span></span>
<span class="line"><span>     severity: &#39;critical&#39;</span></span>
<span class="line"><span>   target_match:</span></span>
<span class="line"><span>     severity: &#39;warning&#39;</span></span>
<span class="line"><span>   equal: [&#39;alertname&#39;, &#39;dev&#39;, &#39;instance&#39;]</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建grafana的配置文件" tabindex="-1"><a class="header-anchor" href="#新建grafana的配置文件"><span>新建grafana的配置文件</span></a></h3><p>GF_SECURITY_ADMIN_PASSWORD=为grafana超级管理员admin的密码，根据实际修改。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; grafana/config.monitoring &lt;&lt;EOF</span></span>
<span class="line"><span>GF_SECURITY_ADMIN_PASSWORD=password</span></span>
<span class="line"><span>GF_USERS_ALLOW_SIGN_UP=false</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建prometheus的配置文件" tabindex="-1"><a class="header-anchor" href="#新建prometheus的配置文件"><span>新建prometheus的配置文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; prometheus/prometheus.yml &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span># 全局配置</span></span>
<span class="line"><span>global:</span></span>
<span class="line"><span>  scrape_interval:     15s # 将搜刮间隔设置为每15秒一次。默认是每1分钟一次。</span></span>
<span class="line"><span>  evaluation_interval: 15s # 每15秒评估一次规则。默认是每1分钟一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Alertmanager 配置</span></span>
<span class="line"><span>alerting:</span></span>
<span class="line"><span>  alertmanagers:</span></span>
<span class="line"><span>  - static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;alertmanager:9093&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 报警(触发器)配置</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  - &quot;alert.yml&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 搜刮配置</span></span>
<span class="line"><span>scrape_configs:</span></span>
<span class="line"><span>  - job_name: &#39;prometheus&#39;</span></span>
<span class="line"><span>    # 覆盖全局默认值，每15秒从该作业中刮取一次目标</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;localhost:9090&#39;]</span></span>
<span class="line"><span>  - job_name: &#39;alertmanager&#39;</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;alertmanager:9093&#39;]</span></span>
<span class="line"><span>  - job_name: &#39;cadvisor&#39;</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;cadvisor:8080&#39;]</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        instance: Prometheus服务器 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - job_name: &#39;node-exporter&#39;</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;node_exporter:9100&#39;]</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        instance: Prometheus服务器 </span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建alert报警文件" tabindex="-1"><a class="header-anchor" href="#创建alert报警文件"><span>创建alert报警文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; prometheus/alert.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>groups:</span></span>
<span class="line"><span>- name: Prometheus alert</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  # 对任何实例超过30秒无法联系的情况发出警报</span></span>
<span class="line"><span>  - alert: 服务告警</span></span>
<span class="line"><span>    expr: up == 0</span></span>
<span class="line"><span>    for: 30s</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;服务异常,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;{{ $labels.job }} 服务已关闭&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建docker-compose-yaml文件" tabindex="-1"><a class="header-anchor" href="#新建docker-compose-yaml文件"><span>新建docker-compose.yaml文件</span></a></h3><p><a href="https://hub.docker.com/r/prom/prometheus/tags" target="_blank" rel="noopener noreferrer">prometheus docker hub最新版本查看地址</a></p><p><a href="https://hub.docker.com/r/prom/alertmanager/tags" target="_blank" rel="noopener noreferrer">alertmanager docker hub最新版本查看地址</a></p><p><a href="https://hub.docker.com/r/prom/node-exporter/tags" target="_blank" rel="noopener noreferrer">node_exporter docker hub最新版本查看地址</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#进入到prometheus目录</span></span>
<span class="line"><span>cd /data/docker-prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#通过cat新建docker-compose.yaml文件</span></span>
<span class="line"><span>cat &gt; docker-compose.yaml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>version: &#39;3.3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span>  prometheus_data: {}</span></span>
<span class="line"><span>  grafana_data: {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  monitoring:</span></span>
<span class="line"><span>    driver: bridge</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  prometheus:</span></span>
<span class="line"><span>    image: prom/prometheus:v2.37.6</span></span>
<span class="line"><span>    container_name: prometheus</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - ./prometheus/:/etc/prometheus/</span></span>
<span class="line"><span>      - prometheus_data:/prometheus</span></span>
<span class="line"><span>    command:</span></span>
<span class="line"><span>      - &#39;--config.file=/etc/prometheus/prometheus.yml&#39;</span></span>
<span class="line"><span>      - &#39;--storage.tsdb.path=/prometheus&#39;</span></span>
<span class="line"><span>      - &#39;--web.console.libraries=/usr/share/prometheus/console_libraries&#39;</span></span>
<span class="line"><span>      - &#39;--web.console.templates=/usr/share/prometheus/consoles&#39;</span></span>
<span class="line"><span>      #热加载配置</span></span>
<span class="line"><span>      - &#39;--web.enable-lifecycle&#39;</span></span>
<span class="line"><span>      #api配置</span></span>
<span class="line"><span>      #- &#39;--web.enable-admin-api&#39;</span></span>
<span class="line"><span>      #历史数据最大保留时间，默认15天</span></span>
<span class="line"><span>      - &#39;--storage.tsdb.retention.time=30d&#39;  </span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - monitoring</span></span>
<span class="line"><span>    links:</span></span>
<span class="line"><span>      - alertmanager</span></span>
<span class="line"><span>      - cadvisor</span></span>
<span class="line"><span>      - node_exporter</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>      - &#39;9090&#39;</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9090:9090</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - cadvisor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  alertmanager:</span></span>
<span class="line"><span>    image: prom/alertmanager:v0.25.0</span></span>
<span class="line"><span>    container_name: alertmanager</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - ./alertmanager/:/etc/alertmanager/</span></span>
<span class="line"><span>    command:</span></span>
<span class="line"><span>      - &#39;--config.file=/etc/alertmanager/config.yml&#39;</span></span>
<span class="line"><span>      - &#39;--storage.path=/alertmanager&#39;</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - monitoring</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>      - &#39;9093&#39;</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9093:9093</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  cadvisor:</span></span>
<span class="line"><span>    image: google/cadvisor:latest</span></span>
<span class="line"><span>    container_name: cadvisor</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - /:/rootfs:ro</span></span>
<span class="line"><span>      - /var/run:/var/run:rw</span></span>
<span class="line"><span>      - /sys:/sys:ro</span></span>
<span class="line"><span>      - /var/lib/docker/:/var/lib/docker:ro</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - monitoring</span></span>
<span class="line"><span>    expose:</span></span>
<span class="line"><span>      - &#39;8080&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  node_exporter:</span></span>
<span class="line"><span>    image: prom/node-exporter:v1.5.0</span></span>
<span class="line"><span>    container_name: node-exporter</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - /proc:/host/proc:ro</span></span>
<span class="line"><span>      - /sys:/host/sys:ro</span></span>
<span class="line"><span>      - /:/rootfs:ro</span></span>
<span class="line"><span>    command: </span></span>
<span class="line"><span>      - &#39;--path.procfs=/host/proc&#39; </span></span>
<span class="line"><span>      - &#39;--path.sysfs=/host/sys&#39;</span></span>
<span class="line"><span>      - &#39;--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc|rootfs/var/lib/docker)($$|/)&#39;</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - monitoring</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &#39;9100:9100&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  grafana:</span></span>
<span class="line"><span>    image: grafana/grafana:9.4.3</span></span>
<span class="line"><span>    container_name: grafana</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span>      - grafana_data:/var/lib/grafana</span></span>
<span class="line"><span>      - ./grafana/provisioning/:/etc/grafana/provisioning/</span></span>
<span class="line"><span>    env_file:</span></span>
<span class="line"><span>      - ./grafana/config.monitoring</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - monitoring</span></span>
<span class="line"><span>    links:</span></span>
<span class="line"><span>      - prometheus</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 3000:3000</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - prometheus</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、通过克隆gitee代码安装-二选一" tabindex="-1"><a class="header-anchor" href="#_2、通过克隆gitee代码安装-二选一"><span>2、通过克隆gitee代码安装（二选一）</span></a></h2><p>命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mkdir /data/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /data/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git clone https://gitee.com/linge365/docker-prometheus.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd docker-prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、运行prometheus" tabindex="-1"><a class="header-anchor" href="#_3、运行prometheus"><span>3、运行Prometheus</span></a></h2><p>运行命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data/docker-prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查容器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker ps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查端口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ss -lntp|egrep &quot;3000|9090|9100|9093&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>web访问地址</p><table id="988942ea" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ue4769f12" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">应用</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="ubf3e009b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">访问地址</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="ue65dcfd1" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">备注</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="ufa179ce0" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">prometheus</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="uf6e737e5" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://192.168.11.61:9090" data-href="http://192.168.11.61:9090" target="_blank" class="ne-link"><span class="ne-text">http://192.168.11.61:9090</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u0e0e02bb" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">无用户和密码</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="uf7434444" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">grafana</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u1f644550" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://192.168.11.61:3000" data-href="http://192.168.11.61:3000" target="_blank" class="ne-link"><span class="ne-text">http://192.168.11.61:3000</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u27a6c8ad" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">admin/xxx</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="u8904fb39" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">altermanager</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u21b02d76" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://192.168.11.61:9093" data-href="http://192.168.11.61:9093" target="_blank" class="ne-link"><span class="ne-text">http://192.168.11.61:9093</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u394eb11a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">无用户和密码</span></p></td></tr><tr style="height:33px;"><td width="250" style="border:1px solid #d9d9d9;"><p id="u94f8acc7" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">node-exporter</span></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u03d5a84c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><a href="http://192.168.11.61:9100/metrics" data-href="http://192.168.11.61:9100/metrics" target="_blank" class="ne-link"><span class="ne-text">http://192.168.11.61:9100/metrics</span></a></p></td><td width="250" style="border:1px solid #d9d9d9;"><p id="u3966a0de" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">无用户和密码</span></p></td></tr></tbody></table><h2 id="_4、各个容器及应用" tabindex="-1"><a class="header-anchor" href="#_4、各个容器及应用"><span>4、各个容器及应用</span></a></h2><ul><li><p>Prometheus 采集数据</p></li><li><p>Grafana 用于图表展示</p></li><li><p>alertmanager 用于接收 Prometheus 发送的告警信息</p></li><li><p>node-exporter 用于收集操作系统和硬件信息的metrics</p></li><li><p>cadvisor 用于收集docker的相关metrics</p></li></ul><h1 id="三、使用grafana展示prometheus的图形" tabindex="-1"><a class="header-anchor" href="#三、使用grafana展示prometheus的图形"><span>三、使用grafana展示prometheus的图形</span></a></h1><h2 id="_1、登录grafana" tabindex="-1"><a class="header-anchor" href="#_1、登录grafana"><span>1、登录Grafana</span></a></h2><p>登录Grafana <a href="http://192.168.11.61:3000/" target="_blank" rel="noopener noreferrer">http://192.168.11.61:3000/</a></p><p>用户名：admin</p><p>密码：password</p><h2 id="_2、创建-prometheus-数据源" tabindex="-1"><a class="header-anchor" href="#_2、创建-prometheus-数据源"><span>2、创建 Prometheus 数据源</span></a></h2><p>在 Grafana 中创建 Prometheus 数据源：</p><ol><li><p>单击边栏中的“齿轮”，打开“配置”菜单。</p></li><li><p>单击“数据源”。</p></li><li><p>单击“添加数据源”。</p></li><li><p>选择“Prometheus”作为类型。</p></li><li><p>设置适当的 Prometheus 服务器 URL（例如，<code>http://prometheus:9090</code>）</p></li><li><p>单击“保存并测试”以保存新的数据源。</p></li></ol><p>如下图：</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击Prometheus</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>url填入：<code>http://prometheus:9090</code> 注：docker容器一般通过主机名链接，因为ip会变。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3、创建仪表盘" tabindex="-1"><a class="header-anchor" href="#_3、创建仪表盘"><span>3、创建仪表盘</span></a></h2><h3 id="手动创建仪表盘" tabindex="-1"><a class="header-anchor" href="#手动创建仪表盘"><span>手动创建仪表盘</span></a></h3><p>略</p><h3 id="从-grafana-com-导入仪表板" tabindex="-1"><a class="header-anchor" href="#从-grafana-com-导入仪表板"><span>从 Grafana.com 导入仪表板</span></a></h3><p><a href="https://grafana.com/grafana/dashboards/" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/dashboards/</a></p><p>打开grafana的dashboards官网，在搜索栏输入node exporter回车，点击下载量大的dashboards如下图：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在拷贝id</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开grafana web控制台--点击dashbord图标--在点import导入--粘贴之前复制的id,<code>1860</code>--在点load加载</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>name填写“服务器监控”（根据实际修改），选择“prometheus”--在点import导入</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>导入dashbord完成后，如下图：</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',75),h=[v];function u(b,g){return a(),n("div",null,h)}const _=s(m,[["render",u],["__file","1.5.docker安装prometheus.html.vue"]]),x=JSON.parse('{"path":"/note/Prometheus/1.5.docker%E5%AE%89%E8%A3%85prometheus.html","title":"1.5.docker安装prometheus","lang":"zh-CN","frontmatter":{"title":"1.5.docker安装prometheus","order":5,"icon":"lightbulb","description":"1、环境准备 安装Docker 镜像加速 安装docker 检查 安装Docker-compose 安装命令 检查 二、Docker-compose安装Prometheus 1、手动创建docker-compose和配置文件（二选一） 创建prometheus监控的文件夹 创建alertmanager的配置文件 新建grafana的配置文件 GF_SE...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/1.5.docker%E5%AE%89%E8%A3%85prometheus.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"1.5.docker安装prometheus"}],["meta",{"property":"og:description","content":"1、环境准备 安装Docker 镜像加速 安装docker 检查 安装Docker-compose 安装命令 检查 二、Docker-compose安装Prometheus 1、手动创建docker-compose和配置文件（二选一） 创建prometheus监控的文件夹 创建alertmanager的配置文件 新建grafana的配置文件 GF_SE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.5.docker安装prometheus\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、环境准备","slug":"_1、环境准备","link":"#_1、环境准备","children":[{"level":3,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":3,"title":"安装Docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]}]},{"level":2,"title":"1、手动创建docker-compose和配置文件（二选一）","slug":"_1、手动创建docker-compose和配置文件-二选一","link":"#_1、手动创建docker-compose和配置文件-二选一","children":[{"level":3,"title":"创建prometheus监控的文件夹","slug":"创建prometheus监控的文件夹","link":"#创建prometheus监控的文件夹","children":[]},{"level":3,"title":"创建alertmanager的配置文件","slug":"创建alertmanager的配置文件","link":"#创建alertmanager的配置文件","children":[]},{"level":3,"title":"新建grafana的配置文件","slug":"新建grafana的配置文件","link":"#新建grafana的配置文件","children":[]},{"level":3,"title":"新建prometheus的配置文件","slug":"新建prometheus的配置文件","link":"#新建prometheus的配置文件","children":[]},{"level":3,"title":"创建alert报警文件","slug":"创建alert报警文件","link":"#创建alert报警文件","children":[]},{"level":3,"title":"新建docker-compose.yaml文件","slug":"新建docker-compose-yaml文件","link":"#新建docker-compose-yaml文件","children":[]}]},{"level":2,"title":"2、通过克隆gitee代码安装（二选一）","slug":"_2、通过克隆gitee代码安装-二选一","link":"#_2、通过克隆gitee代码安装-二选一","children":[]},{"level":2,"title":"3、运行Prometheus","slug":"_3、运行prometheus","link":"#_3、运行prometheus","children":[]},{"level":2,"title":"4、各个容器及应用","slug":"_4、各个容器及应用","link":"#_4、各个容器及应用","children":[]},{"level":2,"title":"1、登录Grafana","slug":"_1、登录grafana","link":"#_1、登录grafana","children":[]},{"level":2,"title":"2、创建 Prometheus 数据源","slug":"_2、创建-prometheus-数据源","link":"#_2、创建-prometheus-数据源","children":[]},{"level":2,"title":"3、创建仪表盘","slug":"_3、创建仪表盘","link":"#_3、创建仪表盘","children":[{"level":3,"title":"手动创建仪表盘","slug":"手动创建仪表盘","link":"#手动创建仪表盘","children":[]},{"level":3,"title":"从 Grafana.com 导入仪表板","slug":"从-grafana-com-导入仪表板","link":"#从-grafana-com-导入仪表板","children":[]}]}],"git":{},"readingTime":{"minutes":7.5,"words":2249},"filePathRelative":"note/Prometheus/1.5.docker安装prometheus.md","autoDesc":true}');export{_ as comp,x as data};
