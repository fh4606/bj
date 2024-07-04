import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as i}from"./app-yH_6ilSD.js";const n="/bj/assets/2023-10-28_210627_7464300.3458984644527503-DPVzBjiB.png",t="/bj/assets/2023-10-28_210627_3991990.42990262616467534-CKnmfOIJ.png",l="/bj/assets/2023-10-28_210627_4818130.8484167312527252-Bj2nPI19.png",d="/bj/assets/2023-10-28_210448_0344880.6239992097474373-C9Ts4dJW.png",p={},r=i(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="01409c3a" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u891f0b93" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u3b9a1d2a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uac97f2b2" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u377f544e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ua9cff1be" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u98c7c83e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.65</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u02070767" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u6dcbbd19" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">k8s版本：v1.23.10 单机版本</span></p></td></tr></tbody></table><h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境"><span>准备环境</span></a></h2><p>使用kube-prometheus-stack安装好prometheus，并对整个K8S集群做好监控。</p><h1 id="二、etcd监控" tabindex="-1"><a class="header-anchor" href="#二、etcd监控"><span>二、etcd监控</span></a></h1><h2 id="_1、获取etcd证书" tabindex="-1"><a class="header-anchor" href="#_1、获取etcd证书"><span>1、获取etcd证书</span></a></h2><p><strong>etcd 证书</strong><br> 对于 etcd 集群一般情况下，为了安全都会开启 https 证书认证的方式，所以要想让 Prometheus 访问到 etcd 集群的监控数据，就需要提供相应的证书校验</p><p>证书路径：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> vim /etc/kubernetes/manifests/kube-apiserver.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>得到</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    - --etcd-cafile=/etc/ssl/etcd/ssl/ca.pem</span></span>
<span class="line"><span>    - --etcd-certfile=/etc/ssl/etcd/ssl/node-k8s.pem</span></span>
<span class="line"><span>    - --etcd-keyfile=/etc/ssl/etcd/ssl/node-k8s-key.pem</span></span>
<span class="line"><span>    - --etcd-servers=https://192.168.11.65:2379</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是跟计算机名有关系的。</p><p>通过curl检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -k --cacert /etc/ssl/etcd/ssl/ca.pem --cert /etc/ssl/etcd/ssl/node-k8s.pem --key /etc/ssl/etcd/ssl/node-k8s-key.pem https://localhost:2379/metrics</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明etcd 自带metrics（监控样本数据）</p><h2 id="_2、创建secret-保密字典" tabindex="-1"><a class="header-anchor" href="#_2、创建secret-保密字典"><span>2、创建secret（保密字典）</span></a></h2><p><code>pem</code>文件根据实际修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl -n monitoring create secret generic etcd-certs \\</span></span>
<span class="line"><span>--from-file=/etc/ssl/etcd/ssl/ca.pem \\</span></span>
<span class="line"><span>--from-file=/etc/ssl/etcd/ssl/node-k8s.pem \\</span></span>
<span class="line"><span>--from-file=/etc/ssl/etcd/ssl/node-k8s-key.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl -n monitoring get secret etcd-certs -oyaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、kube-prometheus-stack开启etcd监控" tabindex="-1"><a class="header-anchor" href="#_3、kube-prometheus-stack开启etcd监控"><span>3、kube-prometheus-stack开启etcd监控</span></a></h2><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h3><ul><li>开启etcd监控</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim kube-prometheus-stack/values.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubeEtcd:</span></span>
<span class="line"><span>  enabled: true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  endpoints:</span></span>
<span class="line"><span>  #因为我们的etcd安装到宿主机上的，所以要指定宿主机ip，ip根据实际修改。</span></span>
<span class="line"><span>  - 192.168.11.65</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  service:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    #注，我的etcd端口为2379，根据实际修改</span></span>
<span class="line"><span>    port: 2379</span></span>
<span class="line"><span>    targetPort: 2379 </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  serviceMonitor:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    #https请求</span></span>
<span class="line"><span>    scheme: https</span></span>
<span class="line"><span>    insecureSkipVerify: true</span></span>
<span class="line"><span>    serverName: &quot;&quot;</span></span>
<span class="line"><span>    #指定证路径</span></span>
<span class="line"><span>    caFile: &quot;/etc/prometheus/secrets/etcd-certs/ca.pem&quot;</span></span>
<span class="line"><span>    certFile: &quot;/etc/prometheus/secrets/etcd-certs/node-k8s.pem&quot;</span></span>
<span class="line"><span>    keyFile: &quot;/etc/prometheus/secrets/etcd-certs/node-k8s-key.pem&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  prometheusSpec:</span></span>
<span class="line"><span>    #把secret挂载到prometheus的pod里面</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>    - name: cert-vol</span></span>
<span class="line"><span>      secret: </span></span>
<span class="line"><span>        secretName: etcd-certs</span></span>
<span class="line"><span>    volumeMounts:</span></span>
<span class="line"><span>    - name: cert-vol</span></span>
<span class="line"><span>      mountPath: &quot;/etc/prometheus/secrets/etcd-certs&quot;</span></span>
<span class="line"><span>      readOnly: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新配置" tabindex="-1"><a class="header-anchor" href="#更新配置"><span>更新配置</span></a></h3><p>删除服务prometheus-kube-prometheus-kube-etcd</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl delete svc prometheus-kube-prometheus-kube-etcd -n kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在执行更新</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm upgrade prometheus -n monitoring kube-prometheus-stack</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查"><span>检查</span></a></h3><p>更新完成后，在 Prometheus 的 Pod 中检查 etcd 证书是否挂载成功</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s:~# kubectl get pod -n monitoring</span></span>
<span class="line"><span>NAME                                                     READY   STATUS    RESTARTS        AGE</span></span>
<span class="line"><span>prometheus-prometheus-kube-prometheus-prometheus-0       2/2     Running   0               53s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入pod，检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#进入pod</span></span>
<span class="line"><span>kubectl exec -it prometheus-prometheus-kube-prometheus-prometheus-0 -n monitoring -- sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看</span></span>
<span class="line"><span>ls /etc/prometheus/secrets/etcd-certs/  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ca.pem            node-k8s-key.pem  node-k8s.pem  #没有问题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、配置访问地址" tabindex="-1"><a class="header-anchor" href="#_4、配置访问地址"><span>4、配置访问地址</span></a></h2><p>因为prometheus重启过，所以之前的9090映射关闭了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl port-forward --address=0.0.0.0 svc/prometheus-kube-prometheus-prometheus -n monitoring 9090:9090 &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl port-forward --address=0.0.0.0 svc/prometheus-grafana -n monitoring 3000:80 &amp;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、检查" tabindex="-1"><a class="header-anchor" href="#_5、检查"><span>5、检查</span></a></h2><p><a href="http://192.168.11.65:9090/targets?search=" target="_blank" rel="noopener noreferrer">http://192.168.11.65:9090/targets?search=</a></p><p><a href="http://192.168.11.65:3000/dashboards" target="_blank" rel="noopener noreferrer">http://192.168.11.65:3000/dashboards</a></p><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6、碰到的问题" tabindex="-1"><a class="header-anchor" href="#_6、碰到的问题"><span>6、碰到的问题</span></a></h2><p>更新配置时报错如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>helm upgrade prometheus -n monitoring kube-prometheus-stack</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>解决：</p><p>删除报错的service</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl delete svc prometheus-kube-prometheus-kube-etcd -n kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',54),c=[r];function h(o,u){return a(),s("div",null,c)}const g=e(p,[["render",h],["__file","8.3.etcd监控.html.vue"]]),v=JSON.parse('{"path":"/note/Prometheus/8.3.etcd%E7%9B%91%E6%8E%A7.html","title":"8.3.etcd监控","lang":"zh-CN","frontmatter":{"title":"8.3.etcd监控","order":45,"icon":"lightbulb","description":"一、环境 准备环境 使用kube-prometheus-stack安装好prometheus，并对整个K8S集群做好监控。 二、etcd监控 1、获取etcd证书 etcd 证书 对于 etcd 集群一般情况下，为了安全都会开启 https 证书认证的方式，所以要想让 Prometheus 访问到 etcd 集群的监控数据，就需要提供相应的证书校验 证...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/Prometheus/8.3.etcd%E7%9B%91%E6%8E%A7.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"8.3.etcd监控"}],["meta",{"property":"og:description","content":"一、环境 准备环境 使用kube-prometheus-stack安装好prometheus，并对整个K8S集群做好监控。 二、etcd监控 1、获取etcd证书 etcd 证书 对于 etcd 集群一般情况下，为了安全都会开启 https 证书认证的方式，所以要想让 Prometheus 访问到 etcd 集群的监控数据，就需要提供相应的证书校验 证..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.3.etcd监控\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"准备环境","slug":"准备环境","link":"#准备环境","children":[]},{"level":2,"title":"1、获取etcd证书","slug":"_1、获取etcd证书","link":"#_1、获取etcd证书","children":[]},{"level":2,"title":"2、创建secret（保密字典）","slug":"_2、创建secret-保密字典","link":"#_2、创建secret-保密字典","children":[]},{"level":2,"title":"3、kube-prometheus-stack开启etcd监控","slug":"_3、kube-prometheus-stack开启etcd监控","link":"#_3、kube-prometheus-stack开启etcd监控","children":[{"level":3,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":3,"title":"更新配置","slug":"更新配置","link":"#更新配置","children":[]},{"level":3,"title":"检查","slug":"检查","link":"#检查","children":[]}]},{"level":2,"title":"4、配置访问地址","slug":"_4、配置访问地址","link":"#_4、配置访问地址","children":[]},{"level":2,"title":"5、检查","slug":"_5、检查","link":"#_5、检查","children":[]},{"level":2,"title":"6、碰到的问题","slug":"_6、碰到的问题","link":"#_6、碰到的问题","children":[]}],"git":{},"readingTime":{"minutes":3.01,"words":903},"filePathRelative":"note/Prometheus/8.3.etcd监控.md","autoDesc":true}');export{g as comp,v as data};
