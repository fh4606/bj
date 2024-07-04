import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-fmcy30Ms.js";const i="/assets/2023-10-28_210642_2667630.24848546569161267-CsSmydhE.png",l="/assets/2023-10-28_210641_9703940.8553341786567578-BTG6zXz-.png",p="/assets/2023-10-28_210641_5714470.061422193688037696-BPNcLviH.png",r="/assets/2023-10-28_210642_4566120.5018554614969495-hRcgPqcV.png",d="/assets/2023-10-28_210448_0344880.6239992097474373-C9Ts4dJW.png",t={},c=a(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="01409c3a" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ued16d2ab" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u73904781" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u6f949398" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uf0f150af" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ud7b9f0ae" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u65fc3dc1" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.65</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uedaafcd9" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u9f60f7b1" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s版本：v1.23.10 单机版本</span></p></td></tr></tbody></table><p>serviemonitor</p><p>promehtuerules</p><h2 id="_1、准备环境" tabindex="-1"><a class="header-anchor" href="#_1、准备环境"><span>1、准备环境</span></a></h2><p>略</p><h1 id="二、监控redis" tabindex="-1"><a class="header-anchor" href="#二、监控redis"><span>二、监控redis</span></a></h1><h2 id="_1、安装redis" tabindex="-1"><a class="header-anchor" href="#_1、安装redis"><span>1、安装redis</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm repo add bitnami https://charts.bitnami.com/bitnami</span></span>
<span class="line"><span></span></span>
<span class="line"><span>helm repo update</span></span>
<span class="line"><span></span></span>
<span class="line"><span>helm search repo bitnami/redis </span></span>
<span class="line"><span></span></span>
<span class="line"><span>helm pull bitnami/redis --version 17.9.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xf redis-17.9.2.tgz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件"><span>编辑配置文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> vim redis/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改配置如下：设置密码为123456，设置从节点数量，关闭持久化存储</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    password: &quot;123456&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#关闭持久化存储</span></span>
<span class="line"><span>persistence:</span></span>
<span class="line"><span>  enabled: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置一个从节点</span></span>
<span class="line"><span>replica:</span></span>
<span class="line"><span>  replicaCount: 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过sed修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sed -i &#39;/redis:/{n;s#password: &quot;&quot;#password: &quot;123456&quot;#}&#39; redis/values.yaml </span></span>
<span class="line"><span>sed -i &#39;/  persistence:/{n;n;n;s#enabled: true#enabled: false#}&#39; redis/values.yaml </span></span>
<span class="line"><span>sed -i &#39;/^replica:/{n;n;n;s#replicaCount: 3#replicaCount: 1#}&#39; redis/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>egrep -A3 &quot;password: |  persistence:|^replica:&quot; redis/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm install -n monitoring --create-namespace redis redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检测redis登陆</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl exec -it redis-master-0 -n monitoring -- redis-cli -a 123456 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>127.0.0.1:6379&gt; info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、创建deployment部署redis-exporter-三选一" tabindex="-1"><a class="header-anchor" href="#_2、创建deployment部署redis-exporter-三选一"><span>2、创建Deployment部署redis-exporter（三选一）</span></a></h2><h3 id="安装redis-exporter" tabindex="-1"><a class="header-anchor" href="#安装redis-exporter"><span>安装redis-exporter</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; redis-exporter.yaml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>---  </span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: redis-exporter</span></span>
<span class="line"><span>  name: redis-exporter-master</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      app: redis-exporter</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        app: redis-exporter</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: redis-exporter</span></span>
<span class="line"><span>        image: oliver006/redis_exporter:latest</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>        - name: TZ</span></span>
<span class="line"><span>          value: &quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span>        - name: REDIS_ADDR</span></span>
<span class="line"><span>          #地址和密码根据实际填写</span></span>
<span class="line"><span>          value: &quot;redis://redis-master:6379&quot;</span></span>
<span class="line"><span>        - name: REDIS_PASSWORD</span></span>
<span class="line"><span>          value: &quot;123456&quot;</span></span>
<span class="line"><span>        resources:</span></span>
<span class="line"><span>          requests:</span></span>
<span class="line"><span>            cpu: 100m</span></span>
<span class="line"><span>            memory: 100Mi</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - name: metrics</span></span>
<span class="line"><span>          containerPort: 9121</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: redis-exporter</span></span>
<span class="line"><span>  name: redis-exporter-replicas</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      app: redis-exporter</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        app: redis-exporter</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: redis-exporter</span></span>
<span class="line"><span>        image: oliver006/redis_exporter:latest</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>        - name: TZ</span></span>
<span class="line"><span>          value: &quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span>        - name: REDIS_ADDR</span></span>
<span class="line"><span>          #地址和密码根据实际填写</span></span>
<span class="line"><span>          value: &quot;redis://redis-replicas:6379&quot;</span></span>
<span class="line"><span>        - name: REDIS_PASSWORD</span></span>
<span class="line"><span>          value: &quot;123456&quot;</span></span>
<span class="line"><span>        resources:</span></span>
<span class="line"><span>          requests:</span></span>
<span class="line"><span>            cpu: 100m</span></span>
<span class="line"><span>            memory: 100Mi</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - name: metrics</span></span>
<span class="line"><span>          containerPort: 9121</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: redis-exporter</span></span>
<span class="line"><span>  name: redis-exporter</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  - name: http-metirc</span></span>
<span class="line"><span>    protocol: TCP</span></span>
<span class="line"><span>    port: 9121</span></span>
<span class="line"><span>    targetPort: metrics</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    app: redis-exporter</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create -f redis-exporter.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get -f redis-exporter.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="prometheus添加配置" tabindex="-1"><a class="header-anchor" href="#prometheus添加配置"><span>Prometheus添加配置</span></a></h3><p>添加ServiceMonitor资源对象，使prometheus去收集redis_exporter提供的监控样本数据</p><p>使用cat创建redis-sm.yaml文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;redis-sm.yaml&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span>kind: ServiceMonitor</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: redis-exporter</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: redis-exporter</span></span>
<span class="line"><span>    release: prometheus</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  #jobLabel: redis-exporter</span></span>
<span class="line"><span>  endpoints:</span></span>
<span class="line"><span>  #http-metirc为redis-exporter的Service端口的name，一定要一致</span></span>
<span class="line"><span>  - port: http-metirc</span></span>
<span class="line"><span>    interval: 30s</span></span>
<span class="line"><span>    scheme: http</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      app: redis-exporter</span></span>
<span class="line"><span>  namespaceSelector:</span></span>
<span class="line"><span>    matchNames:</span></span>
<span class="line"><span>    - monitoring</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解释：</p><p>endpoints：用于配置需要收集 metrics 的 Endpoints 的端口和其他参数（注意：endpoints（小写）是 ServiceMonitor CRD 中的一个字段，而 Endpoints（大写）是 Kubernetes 资源类型）</p><p>selector：通过label匹配的方式获取serviceMonitor访问到的后端程序，通常都是是exporter对应的service</p><p>创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create -f redis-sm.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> kubectl get -f redis-sm.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="http://192.168.11.65:9090/targets" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/targets</a></p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加告警规则-触发器" tabindex="-1"><a class="header-anchor" href="#添加告警规则-触发器"><span>添加告警规则（触发器）</span></a></h3><p>从这里下载告警文件</p><p><a href="https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware" target="_blank" rel="noopener noreferrer">https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/redis/oliver006-redis-exporter.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建PrometheusRule资源对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; redis-exporter-rules.yml &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span>kind: PrometheusRule</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    release: prometheus</span></span>
<span class="line"><span>  name: redis-exporter-rules</span></span>
<span class="line"><span>  namespace: monitoring</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  groups:</span></span>
<span class="line"><span>  - name: Redis</span></span>
<span class="line"><span>    rules:</span></span>
<span class="line"><span>      - alert: RedisDown</span></span>
<span class="line"><span>        expr: &#39;redis_up == 0&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis down (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis instance is down</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisMissingMaster</span></span>
<span class="line"><span>        expr: &#39;(count(redis_instance_info{role=&quot;master&quot;}) or vector(0)) &lt; 1&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis missing master (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis cluster has no node marked as master.</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisTooManyMasters</span></span>
<span class="line"><span>        expr: &#39;count(redis_instance_info{role=&quot;master&quot;}) &gt; 1&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis too many masters (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis cluster has too many nodes marked as master.</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisDisconnectedSlaves</span></span>
<span class="line"><span>        expr: &#39;count without (instance, job) (redis_connected_slaves) - sum without (instance, job) (redis_connected_slaves) - 1 &gt; 1&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis disconnected slaves (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis not replicating for all slaves. Consider reviewing the redis replication status.</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisReplicationBroken</span></span>
<span class="line"><span>        expr: &#39;delta(redis_connected_slaves[1m]) &lt; 0&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis replication broken (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis instance lost a slave</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisClusterFlapping</span></span>
<span class="line"><span>        expr: &#39;changes(redis_connected_slaves[1m]) &gt; 1&#39;</span></span>
<span class="line"><span>        for: 2m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis cluster flapping (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Changes have been detected in Redis replica connection. This can occur when replica nodes lose connection to the master and reconnect (a.k.a flapping).</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisMissingBackup</span></span>
<span class="line"><span>        expr: &#39;time() - redis_rdb_last_save_timestamp_seconds &gt; 60 * 60 * 24&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis missing backup (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis has not been backuped for 24 hours</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisOutOfSystemMemory</span></span>
<span class="line"><span>        expr: &#39;redis_memory_used_bytes / redis_total_system_memory_bytes * 100 &gt; 90&#39;</span></span>
<span class="line"><span>        for: 2m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: warning</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis out of system memory (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis is running out of system memory (&gt; 90%)</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisOutOfConfiguredMaxmemory</span></span>
<span class="line"><span>        expr: &#39;redis_memory_used_bytes / redis_memory_max_bytes * 100 &gt; 90&#39;</span></span>
<span class="line"><span>        for: 2m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: warning</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis out of configured maxmemory (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis is running out of configured maxmemory (&gt; 90%)</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisTooManyConnections</span></span>
<span class="line"><span>        expr: &#39;redis_connected_clients &gt; 100&#39;</span></span>
<span class="line"><span>        for: 2m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: warning</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis too many connections (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis instance has too many connections</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisNotEnoughConnections</span></span>
<span class="line"><span>        expr: &#39;redis_connected_clients &lt; 5&#39;</span></span>
<span class="line"><span>        for: 2m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: warning</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis not enough connections (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Redis instance should have more connections (&gt; 5)</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      - alert: RedisRejectedConnections</span></span>
<span class="line"><span>        expr: &#39;increase(redis_rejected_connections_total[1m]) &gt; 0&#39;</span></span>
<span class="line"><span>        for: 0m</span></span>
<span class="line"><span>        labels:</span></span>
<span class="line"><span>          severity: critical</span></span>
<span class="line"><span>        annotations:</span></span>
<span class="line"><span>          summary: Redis rejected connections (instance {{ $labels.instance }})</span></span>
<span class="line"><span>          description: &quot;Some connections to Redis has been rejected</span></span>
<span class="line"><span>  VALUE = {{ $value }}</span></span>
<span class="line"><span>  LABELS = {{ $labels }}&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>redis-exporter-rules.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> kubectl get -f redis-exporter-rules.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="http://192.168.11.65:9090/alerts?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/alerts?search=</a></p><h2 id="_3、修改配置安装redis-exporter-三选一" tabindex="-1"><a class="header-anchor" href="#_3、修改配置安装redis-exporter-三选一"><span>3、修改配置安装redis-exporter（三选一）</span></a></h2><ul><li>修改配置，安装redis_exporter并监控，添加告警规则</li></ul><p>bitnami/redis</p><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h3><p>vim redis/values.yaml</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>metrics:</span></span>
<span class="line"><span>  enabled: true</span></span>
<span class="line"><span>  serviceMonitor:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    additionalLabels:</span></span>
<span class="line"><span>      release: prometheus</span></span>
<span class="line"><span>  prometheusRule:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>    additionalLabels:</span></span>
<span class="line"><span>      release: prometheus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新配置" tabindex="-1"><a class="header-anchor" href="#更新配置"><span>更新配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm upgrade -n monitoring --create-namespace redis redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查pod</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> kubectl get pod -n monitoring</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建prometheusrule文件" tabindex="-1"><a class="header-anchor" href="#创建prometheusrule文件"><span>创建PrometheusRule文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>参考上面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查servicemonitor" tabindex="-1"><a class="header-anchor" href="#检查servicemonitor"><span>检查ServiceMonitor</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get servicemonitors redis -n monitoring -oyaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查prometheusrule" tabindex="-1"><a class="header-anchor" href="#检查prometheusrule"><span>检查PrometheusRule</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get prometheusrules redis -n monitoring -oyaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>web检查</p><p><a href="http://192.168.11.65:9090/targets?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/targets?search=</a></p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><a href="http://192.168.11.65:9090/alerts?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/alerts?search=</a> 检查</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4、prometheus-redis-exporter-三选一" tabindex="-1"><a class="header-anchor" href="#_4、prometheus-redis-exporter-三选一"><span>4、prometheus-redis-exporter（三选一）</span></a></h2><h3 id="安装prometheus-redis-exporter" tabindex="-1"><a class="header-anchor" href="#安装prometheus-redis-exporter"><span>安装prometheus-redis-exporter</span></a></h3><ul><li>通过prometheus-community仓库安装prometheus-redis-exporter</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm search repo prometheus-community|grep redis</span></span>
<span class="line"><span>prometheus-community/prometheus-redis-exporter          5.3.1           v1.44.0         Prometheus exporter for Redis metrics </span></span>
<span class="line"><span></span></span>
<span class="line"><span>helm fetch prometheus-community/prometheus-redis-exporter</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar xf prometheus-redis-exporter-5.3.1.tgz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过wget下载</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/prometheus-community/helm-charts/releases/download/prometheus-redis-exporter-5.3.1/prometheus-redis-exporter-5.3.1.tgz</span></span>
<span class="line"><span>tar xf prometheus-redis-exporter-5.3.1.tgz</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>grep -A 2 &#39;image:&#39; prometheus-redis-exporter/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#不用替换</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置-1" tabindex="-1"><a class="header-anchor" href="#修改配置-1"><span>修改配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim prometheus-redis-exporter/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>开启serviceMonitor和prometheusRule，添加lables: <code>release: prometheus</code></p><p>从 5.0.0 开始，redis exporter helm chart 支持多个目标。</p><p>通过启用<code>serviceMonitor.multipleTarget</code>和设置目标<code>serviceMonitor.targets</code>，可以抓取多个 redis 实例。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>redisAddress: redis://redis-master:6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span>serviceMonitor:</span></span>
<span class="line"><span>  enabled: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth:</span></span>
<span class="line"><span>  enabled: true</span></span>
<span class="line"><span>  secret:</span></span>
<span class="line"><span>    name: &quot;redis&quot;</span></span>
<span class="line"><span>    key: &quot;redis-password&quot;</span></span>
<span class="line"><span>  #redisPassword: &quot;123456&quot;</span></span>
<span class="line"><span>  #如果要使用redisPassword: &quot;123456&quot;这个参数，vim prometheus-redis-exporter/templates/deployment.yaml </span></span>
<span class="line"><span>  #把value: {{ .Values.auth.redisPassword }}修改为value: &quot;{{ .Values.auth.redisPassword }}&quot;,加双引号</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm安装" tabindex="-1"><a class="header-anchor" href="#helm安装"><span>helm安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm install  -n monitoring --create-namespace prometheus-redis-exporter prometheus-redis-exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查metrics</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s:~# kubectl get svc  -n monitoring</span></span>
<span class="line"><span>NAME                                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      </span></span>
<span class="line"><span>prometheus-redis-exporter                 ClusterIP   10.233.48.200   &lt;none&gt;        9121/TCP                     11m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#通过curl检查</span></span>
<span class="line"><span>curl 10.233.48.200:9121/metrics</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查servicemonitors</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get servicemonitors prometheus-redis-exporter -n monitoring -oyaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查prometheusrules</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get prometheusrules prometheus-redis-exporter -n monitoring -oyaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5、问题" tabindex="-1"><a class="header-anchor" href="#_5、问题"><span>5、问题</span></a></h2><p><a href="http://192.168.11.65:9090/targets?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/targets?search=</a> 检查没有redis</p><p>解决：</p><p>检查prometheus-mysql-exporter的ServiceMonitor配置的labels是否有<code>release: prometheus</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get ServiceMonitor prometheus-redis-exporter -n monitoring -oyaml</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    release: prometheus #是否有这行</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>#如果没有通过命令增加</span></span>
<span class="line"><span>kubectl label servicemonitors prometheus-redis-exporter release=prometheus -n monitoring</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后检查</p><h2 id="_6、grafana添加dashboard" tabindex="-1"><a class="header-anchor" href="#_6、grafana添加dashboard"><span>6、grafana添加dashboard</span></a></h2><p>id：11835</p><p>id：17507</p><p>集群方式监控，id：14615</p><p>图形展示成功。图形问题是因为最大内存没有设置</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总：</p><p>二进制：安装redis-exporter 修改prometheus配置（增加metrics地址，重启promehtues），增加告警规则，dashboard</p><p>K8S: 安装redis-exporter  添加Servicemonitor, 增加prometheusrules  dashboard</p><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',112),v=[c];function o(u,m){return e(),n("div",null,v)}const g=s(t,[["render",o],["__file","8.4.在k8s中监控redis.html.vue"]]),k=JSON.parse('{"path":"/note/Prometheus/8.4.%E5%9C%A8k8s%E4%B8%AD%E7%9B%91%E6%8E%A7redis.html","title":"8.4.在k8s中监控redis","lang":"zh-CN","frontmatter":{"title":"8.4.在k8s中监控redis","order":46,"icon":"lightbulb","description":"一、环境 serviemonitor promehtuerules 1、准备环境 略 二、监控redis 1、安装redis 编辑配置文件 修改配置如下：设置密码为123456，设置从节点数量，关闭持久化存储 通过sed修改 检查 安装 检测redis登陆 2、创建Deployment部署redis-exporter（三选一） 安装redis-expo...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/8.4.%E5%9C%A8k8s%E4%B8%AD%E7%9B%91%E6%8E%A7redis.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"8.4.在k8s中监控redis"}],["meta",{"property":"og:description","content":"一、环境 serviemonitor promehtuerules 1、准备环境 略 二、监控redis 1、安装redis 编辑配置文件 修改配置如下：设置密码为123456，设置从节点数量，关闭持久化存储 通过sed修改 检查 安装 检测redis登陆 2、创建Deployment部署redis-exporter（三选一） 安装redis-expo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.4.在k8s中监控redis\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、准备环境","slug":"_1、准备环境","link":"#_1、准备环境","children":[]},{"level":2,"title":"1、安装redis","slug":"_1、安装redis","link":"#_1、安装redis","children":[{"level":3,"title":"编辑配置文件","slug":"编辑配置文件","link":"#编辑配置文件","children":[]}]},{"level":2,"title":"2、创建Deployment部署redis-exporter（三选一）","slug":"_2、创建deployment部署redis-exporter-三选一","link":"#_2、创建deployment部署redis-exporter-三选一","children":[{"level":3,"title":"安装redis-exporter","slug":"安装redis-exporter","link":"#安装redis-exporter","children":[]},{"level":3,"title":"Prometheus添加配置","slug":"prometheus添加配置","link":"#prometheus添加配置","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"添加告警规则（触发器）","slug":"添加告警规则-触发器","link":"#添加告警规则-触发器","children":[]}]},{"level":2,"title":"3、修改配置安装redis-exporter（三选一）","slug":"_3、修改配置安装redis-exporter-三选一","link":"#_3、修改配置安装redis-exporter-三选一","children":[{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]},{"level":3,"title":"更新配置","slug":"更新配置","link":"#更新配置","children":[]},{"level":3,"title":"创建PrometheusRule文件","slug":"创建prometheusrule文件","link":"#创建prometheusrule文件","children":[]},{"level":3,"title":"检查ServiceMonitor","slug":"检查servicemonitor","link":"#检查servicemonitor","children":[]},{"level":3,"title":"检查PrometheusRule","slug":"检查prometheusrule","link":"#检查prometheusrule","children":[]}]},{"level":2,"title":"4、prometheus-redis-exporter（三选一）","slug":"_4、prometheus-redis-exporter-三选一","link":"#_4、prometheus-redis-exporter-三选一","children":[{"level":3,"title":"安装prometheus-redis-exporter","slug":"安装prometheus-redis-exporter","link":"#安装prometheus-redis-exporter","children":[]},{"level":3,"title":"修改配置","slug":"修改配置-1","link":"#修改配置-1","children":[]},{"level":3,"title":"helm安装","slug":"helm安装","link":"#helm安装","children":[]}]},{"level":2,"title":"5、问题","slug":"_5、问题","link":"#_5、问题","children":[]},{"level":2,"title":"6、grafana添加dashboard","slug":"_6、grafana添加dashboard","link":"#_6、grafana添加dashboard","children":[]}],"git":{},"readingTime":{"minutes":6.53,"words":1960},"filePathRelative":"note/Prometheus/8.4.在k8s中监控redis.md","autoDesc":true}');export{g as comp,k as data};
