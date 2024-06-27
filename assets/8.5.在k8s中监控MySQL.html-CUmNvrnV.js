import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,d as a}from"./app-Bna6fuy1.js";const i="/assets/2023-10-28_210657_7528630.6359182976541713-BNU31Dqf.png",l="/assets/2023-10-28_210657_4927160.697422153573276-B-rZGBsj.png",p={},t=a(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="01409c3a" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="uf64ccd3f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ua4c9c400" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u33141961" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u142a58c2" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ud8a6961f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u9bc7adf4" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.65</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u1ff0eeba" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u60d88123" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s版本：v1.23.10 单机版本</span></p></td></tr></tbody></table><h2 id="_1、准备环境" tabindex="-1"><a class="header-anchor" href="#_1、准备环境"><span>1、准备环境</span></a></h2><p>kube-prometheus-stack版本45.8.0</p><h1 id="二、监控mysql" tabindex="-1"><a class="header-anchor" href="#二、监控mysql"><span>二、监控MySQL</span></a></h1><p><a href="https://github.com/prometheus-community/helm-charts" target="_blank" rel="noopener noreferrer">github地址</a></p><h2 id="_1、安装mysql" tabindex="-1"><a class="header-anchor" href="#_1、安装mysql"><span>1、安装mysql</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create deploy mysql --image=mysql:8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl set env deploy/mysql MYSQL_ROOT_PASSWORD=password</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl expose deploy mysql --port=3306 --type=NodePort</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl get svc -l app=mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl get po -l app=mysql</span></span>
<span class="line"><span>NAME                     READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>mysql-77cf856468-v4t9j   1/1     Running   0          14s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、创建监控用户" tabindex="-1"><a class="header-anchor" href="#_2、创建监控用户"><span>2、创建监控用户</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl exec -it mysql-77cf856468-v4t9j -- bash</span></span>
<span class="line"><span>#登录数据库</span></span>
<span class="line"><span>mysql -uroot -ppassword</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mysql&gt; CREATE USER &#39;exporter&#39;@&#39;%&#39; IDENTIFIED BY &#39;password&#39; WITH MAX_USER_CONNECTIONS 3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; GRANT PROCESS, REPLICATION CLIENT, SELECT ON *.* TO &#39;exporter&#39;@&#39;%&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#退出mysql</span></span>
<span class="line"><span>mysql&gt; quit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#检查刚创建的用户是否成功</span></span>
<span class="line"><span>mysql -uexporter -ppassword</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#显示所有数据库</span></span>
<span class="line"><span>mysql&gt; show databases;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#退出mysql</span></span>
<span class="line"><span>mysql&gt; quit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#退出容器</span></span>
<span class="line"><span>exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、安装mysql-exporter" tabindex="-1"><a class="header-anchor" href="#_3、安装mysql-exporter"><span>3、安装mysql-exporter</span></a></h2><p>通过prometheus-community下载，需要<code>梯子</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#搜索mysql-exporter</span></span>
<span class="line"><span>helm search repo prometheus-community</span></span>
<span class="line"><span></span></span>
<span class="line"><span>helm fetch prometheus-community/prometheus-mysql-exporter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xf prometheus-mysql-exporter-1.13.0.tgz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过wget下载</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/prometheus-community/helm-charts/releases/download/prometheus-mysql-exporter-1.13.0/prometheus-mysql-exporter-1.13.0.tgz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xf prometheus-mysql-exporter-1.13.0.tgz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grep -A 2 &#39;image:&#39; prometheus-mysql-exporter/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grep -rn &#39;quay.io&#39; prometheus-mysql-exporter/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#批量替换</span></span>
<span class="line"><span>sed -i &#39;s/quay.io/quay.mirrors.ustc.edu.cn/g&#39; \`grep &quot;quay.io&quot; -rl prometheus-mysql-exporter/*\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim prometheus-mysql-exporter/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>修改监控mysql地址、用户名和密码，并开启ServiceMonitor</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>serviceMonitor:</span></span>
<span class="line"><span>  enabled: true</span></span>
<span class="line"><span>  additionalLabels:</span></span>
<span class="line"><span>    release: prometheus</span></span>
<span class="line"><span>mysql:</span></span>
<span class="line"><span>  db: &quot;&quot;</span></span>
<span class="line"><span>  host: &quot;mysql.default&quot;</span></span>
<span class="line"><span>  pass: &quot;password&quot;</span></span>
<span class="line"><span>  port: 3306</span></span>
<span class="line"><span>  user: &quot;exporter&quot;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>collectors:</span></span>
<span class="line"><span>  engine_innodb_status: true</span></span>
<span class="line"><span>  info_schema.innodb_metrics: true</span></span>
<span class="line"><span>  info_schema.processlist: true</span></span>
<span class="line"><span>  info_schema.tables: true</span></span>
<span class="line"><span>  info_schema.tablestats: true</span></span>
<span class="line"><span>  info_schema.schemastats: true</span></span>
<span class="line"><span>  perf_schema.tablelocks: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用sed修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sed -i &#39;s#host: &quot;localhost&quot;#host: &quot;mysql.default&quot;#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#collectors: {}#collectors:#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sed -i &#39;s#collectors: {}#collectors:#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# info_schema.innodb_metrics: false#info_schema.innodb_metrics: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# engine_innodb_status: false#engine_innodb_status: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# info_schema.processlist: false#info_schema.processlist: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# info_schema.tables: true#info_schema.tables: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# info_schema.tablestats: false#info_schema.tablestats: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# info_schema.schemastats: false#info_schema.schemastats: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;s#\\# perf_schema.tablelocks: false#perf_schema.tablelocks: true#g&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sed -i &#39;/additionalLabels/{s#{}#</span></span>
<span class="line"><span>    release: prometheus#}&#39; prometheus-mysql-exporter/values.yaml</span></span>
<span class="line"><span>sed -i &#39;/serviceMonitor/{n;n;s#enabled: false#enabled: true#}&#39; prometheus-mysql-exporter/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装prometheus-mysql-exporter" tabindex="-1"><a class="header-anchor" href="#安装prometheus-mysql-exporter"><span>安装prometheus-mysql-exporter</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm install  -n monitoring --create-namespace prometheus-mysql-exporter prometheus-mysql-exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果修改了配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm -n monitoring upgrade prometheus-mysql-exporter prometheus-mysql-exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查pod是否正常启动</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> kubectl get pod -n monitoring</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3><p><a href="http://192.168.11.65:9090/targets?search=%E6%A3%80%E6%9F%A5%E6%B2%A1%E6%9C%89mysql" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/targets?search=检查没有mysql</a></p><p>解决：</p><p>检查prometheus-mysql-exporter的ServiceMonitor配置的labels是否有<code>release: prometheus</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get ServiceMonitor prometheus-mysql-exporter -n monitoring -oyaml</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    release: prometheus #是否有这行</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>#如果没有通过命令增加</span></span>
<span class="line"><span>kubectl label servicemonitors prometheus-mysql-exporter release=prometheus -n monitoring</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s:~# kubectl get svc  prometheus-mysql-exporter  -n monitoring</span></span>
<span class="line"><span>NAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE</span></span>
<span class="line"><span>prometheus-mysql-exporter   ClusterIP   10.233.36.28   &lt;none&gt;        9104/TCP   62m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查metrics</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl http://10.233.36.28:9104/metrics</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>web上检查targets</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279455-f7dfb435-8fdf-43ec-aa9a-4813d9c77c80.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4、创建告警规则-触发器" tabindex="-1"><a class="header-anchor" href="#_4、创建告警规则-触发器"><span>4、创建告警规则（触发器）</span></a></h2><p>从这里下载告警文件</p><p><a href="https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware" target="_blank" rel="noopener noreferrer">https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mysql/mysqld-exporter.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用cat创建<code>PrometheusRule</code>资源对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; prometheus-mysql-exporter-rules.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span>kind: PrometheusRule</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    release: prometheus</span></span>
<span class="line"><span>  name: prometheus-mysql-exporter-rules</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  groups:</span></span>
<span class="line"><span>  - name: MySQL</span></span>
<span class="line"><span>    rules:</span></span>
<span class="line"><span>    - alert: MysqlDown</span></span>
<span class="line"><span>      expr: mysql_up == 0</span></span>
<span class="line"><span>      for: 30s</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: critical</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;MySQL Down,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;MySQL_exporter连不上MySQL了，当前状态为：{{ $value }}&quot;    </span></span>
<span class="line"><span>    - alert: MysqlTooManyConnections</span></span>
<span class="line"><span>      expr: max_over_time(mysql_global_status_threads_connected[1m]) / mysql_global_variables_max_connections * 100 &gt; 80</span></span>
<span class="line"><span>      for: 2m</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: warning</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;Mysql连接数过多告警,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;MySQL连接数&gt;80%,当前值：{{ $value }}&quot;</span></span>
<span class="line"><span>    - alert: MysqlHighThreadsRunning</span></span>
<span class="line"><span>      expr: max_over_time(mysql_global_status_threads_running[1m]) &gt; 20</span></span>
<span class="line"><span>      for: 2m</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: warning</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;Mysql运行的线程过多,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;Mysql运行的线程 &gt; 20，当前运行的线程：{{ $value }}&quot; </span></span>
<span class="line"><span>    - alert: MysqlSlowQueries</span></span>
<span class="line"><span>      expr: increase(mysql_global_status_slow_queries[2m]) &gt; 0</span></span>
<span class="line"><span>      for: 2m</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: warning</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;Mysql慢日志告警,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;MySQL在过去2分钟有新的{{ $value }}条慢查询&quot;</span></span>
<span class="line"><span>    #MySQL innodb 日志写入停滞</span></span>
<span class="line"><span>    - alert: MysqlInnodbLogWaits</span></span>
<span class="line"><span>      expr: rate(mysql_global_status_innodb_log_waits[15m]) &gt; 10</span></span>
<span class="line"><span>      for: 0m</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: warning</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;MySQL innodb日志等待,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;MySQL innodb日志写入停滞，当前值： {{ $value }}&quot;</span></span>
<span class="line"><span>    - alert: MysqlRestarted</span></span>
<span class="line"><span>      expr: mysql_global_status_uptime &lt; 60</span></span>
<span class="line"><span>      for: 0m</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        severity: info</span></span>
<span class="line"><span>      annotations:</span></span>
<span class="line"><span>        summary: &quot;MySQL 重启,实例: {{ $labels.instance }}&quot;</span></span>
<span class="line"><span>        description: &quot;不到一分钟前，MySQL重启过&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create -f prometheus-mysql-exporter-rules.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查"><span>检查</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get PrometheusRule prometheus-mysql-exporter-rules -n monitoring -o yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6、grafana添加dashboard" tabindex="-1"><a class="header-anchor" href="#_6、grafana添加dashboard"><span>6、grafana添加Dashboard</span></a></h2><p>登录grafana <a href="http://192.168.11.65:3000" target="_blank" rel="noopener noreferrer">http://192.168.11.65:3000</a> 输入用户名和密码</p><p>id：<code>7362</code></p><p>表监控：<code>9625</code></p><p>innodb：<code>9624</code></p><p>图形展示正常如下图：</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279174-65ccd743-3484-4b26-bcb8-ed30cc3f395d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_7、测试" tabindex="-1"><a class="header-anchor" href="#_7、测试"><span>7、测试</span></a></h2><p>把mysql停止看下是否告警出来</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#把mysql的副本设置为0</span></span>
<span class="line"><span>kubectl scale --replicas=0 deployment mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#检查</span></span>
<span class="line"><span>kubectl get pod -o wide</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prometheus 的web上检查<code>alerts</code></p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279214-f64cc987-3543-4118-b6d5-27379081d072.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',66),r=[t];function d(c,o){return n(),e("div",null,r)}const u=s(p,[["render",d],["__file","8.5.在k8s中监控MySQL.html.vue"]]),v=JSON.parse('{"path":"/note/Prometheus/8.5.%E5%9C%A8k8s%E4%B8%AD%E7%9B%91%E6%8E%A7MySQL.html","title":"8.5.在k8s中监控MySQL","lang":"zh-CN","frontmatter":{"title":"8.5.在k8s中监控MySQL","order":47,"icon":"lightbulb","description":"一、环境 1、准备环境 kube-prometheus-stack版本45.8.0 二、监控MySQL github地址 1、安装mysql 2、创建监控用户 执行如下命令： 3、安装mysql-exporter 通过prometheus-community下载，需要梯子 通过wget下载 修改配置 修改监控mysql地址、用户名和密码，并开启Serv...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/8.5.%E5%9C%A8k8s%E4%B8%AD%E7%9B%91%E6%8E%A7MySQL.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"8.5.在k8s中监控MySQL"}],["meta",{"property":"og:description","content":"一、环境 1、准备环境 kube-prometheus-stack版本45.8.0 二、监控MySQL github地址 1、安装mysql 2、创建监控用户 执行如下命令： 3、安装mysql-exporter 通过prometheus-community下载，需要梯子 通过wget下载 修改配置 修改监控mysql地址、用户名和密码，并开启Serv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279455-f7dfb435-8fdf-43ec-aa9a-4813d9c77c80.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.5.在k8s中监控MySQL\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279455-f7dfb435-8fdf-43ec-aa9a-4813d9c77c80.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279174-65ccd743-3484-4b26-bcb8-ed30cc3f395d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688025279214-f64cc987-3543-4118-b6d5-27379081d072.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、准备环境","slug":"_1、准备环境","link":"#_1、准备环境","children":[]},{"level":2,"title":"1、安装mysql","slug":"_1、安装mysql","link":"#_1、安装mysql","children":[]},{"level":2,"title":"2、创建监控用户","slug":"_2、创建监控用户","link":"#_2、创建监控用户","children":[]},{"level":2,"title":"3、安装mysql-exporter","slug":"_3、安装mysql-exporter","link":"#_3、安装mysql-exporter","children":[{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]},{"level":3,"title":"安装prometheus-mysql-exporter","slug":"安装prometheus-mysql-exporter","link":"#安装prometheus-mysql-exporter","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]}]},{"level":2,"title":"4、创建告警规则（触发器）","slug":"_4、创建告警规则-触发器","link":"#_4、创建告警规则-触发器","children":[{"level":3,"title":"检查","slug":"检查","link":"#检查","children":[]}]},{"level":2,"title":"6、grafana添加Dashboard","slug":"_6、grafana添加dashboard","link":"#_6、grafana添加dashboard","children":[]},{"level":2,"title":"7、测试","slug":"_7、测试","link":"#_7、测试","children":[]}],"git":{},"readingTime":{"minutes":4.69,"words":1407},"filePathRelative":"note/Prometheus/8.5.在k8s中监控MySQL.md","autoDesc":true}');export{u as comp,v as data};
