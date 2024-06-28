import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-DuswJAHG.js";const i={},l=a(`<h2 id="_1、查看所有节点" tabindex="-1"><a class="header-anchor" href="#_1、查看所有节点"><span>1、查看所有节点</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get nodes</span></span>
<span class="line"><span>NAME       STATUS   ROLES                  AGE    VERSION</span></span>
<span class="line"><span>master01   Ready    control-plane,master   131m   v1.21.0</span></span>
<span class="line"><span>worker01   Ready    &lt;none&gt;                 13m    v1.21.0</span></span>
<span class="line"><span>worker02   Ready    &lt;none&gt;                 13m    v1.21.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、查看集群健康情况-理想状态" tabindex="-1"><a class="header-anchor" href="#_2、查看集群健康情况-理想状态"><span>2、查看集群健康情况，理想状态</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get cs</span></span>
<span class="line"><span>NAME                 STATUS      MESSAGE</span></span>
<span class="line"><span>scheduler            Healthy       ok</span></span>
<span class="line"><span>controller-manager   Healthy       ok</span></span>
<span class="line"><span>etcd-0               Healthy     {&quot;health&quot;:&quot;true&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、真实情况" tabindex="-1"><a class="header-anchor" href="#_3、真实情况"><span>3、真实情况</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get cs</span></span>
<span class="line"><span>Warning: v1 ComponentStatus is deprecated in v1.19+</span></span>
<span class="line"><span>NAME                 STATUS      MESSAGE                                                                                       ERROR</span></span>
<span class="line"><span>scheduler            Unhealthy   Get &quot;http://127.0.0.1:10251/healthz&quot;: dial tcp 127.0.0.1:10251: connect: connection refused   </span></span>
<span class="line"><span>controller-manager   Unhealthy   Get &quot;http://127.0.0.1:10252/healthz&quot;: dial tcp 127.0.0.1:10252: connect: connection refused   </span></span>
<span class="line"><span>etcd-0               Healthy     {&quot;health&quot;:&quot;true&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、查看集群命令空间kube-systempod中运行情况" tabindex="-1"><a class="header-anchor" href="#_4、查看集群命令空间kube-systempod中运行情况"><span>4、查看集群命令空间kube-systempod中运行情况</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get pods -n kube-system</span></span>
<span class="line"><span>NAME                               READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>coredns-558bd4d5db-c2zcw           1/1     Running   0          134m</span></span>
<span class="line"><span>coredns-558bd4d5db-dfssw           1/1     Running   0          134m</span></span>
<span class="line"><span>etcd-master01                      1/1     Running   1          134m</span></span>
<span class="line"><span>kube-apiserver-master01            1/1     Running   1          134m</span></span>
<span class="line"><span>kube-controller-manager-master01   1/1     Running   1          134m</span></span>
<span class="line"><span>kube-proxy-9glzl                   1/1     Running   0          16m</span></span>
<span class="line"><span>kube-proxy-qh64c                   1/1     Running   1          134m</span></span>
<span class="line"><span>kube-proxy-qkfzz                   1/1     Running   0          16m</span></span>
<span class="line"><span>kube-scheduler-master01            1/1     Running   1          134m</span></span>
<span class="line"><span>## 说明kubernetes管理层面没有问题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、查看calico-system命名空间中pod运行情况" tabindex="-1"><a class="header-anchor" href="#_5、查看calico-system命名空间中pod运行情况"><span>5、查看calico-system命名空间中pod运行情况</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get pods -n calico-system</span></span>
<span class="line"><span>NAME                                       READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>calico-kube-controllers-77b5cb49c9-k5xwx   1/1     Running   0          67m</span></span>
<span class="line"><span>calico-node-94jk9                          1/1     Running   0          67m</span></span>
<span class="line"><span>calico-node-vrm5x                          1/1     Running   0          20m</span></span>
<span class="line"><span>calico-node-zbtmj                          1/1     Running   0          20m</span></span>
<span class="line"><span>calico-typha-59b75b7c59-6zxfr              1/1     Running   0          20m</span></span>
<span class="line"><span>calico-typha-59b75b7c59-hqgc4              1/1     Running   0          67m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证kubernetes集群的pods应用能否访问互联网呢" tabindex="-1"><a class="header-anchor" href="#验证kubernetes集群的pods应用能否访问互联网呢"><span>验证kubernetes集群的pods应用能否访问互联网呢</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# dig -t a www.baidu.com @10.96.0.10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.11.26-RedHat-9.11.26-6.el8 &lt;&lt;&gt;&gt; -t a www.baidu.com @10.96.0.10</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 7421</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 4096</span></span>
<span class="line"><span>; COOKIE: 3131fb84349593a0 (echoed)</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;www.baidu.com.                 IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>www.baidu.com.          30      IN      A       36.155.132.76</span></span>
<span class="line"><span>www.baidu.com.          30      IN      A       36.155.132.3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 25 msec</span></span>
<span class="line"><span>;; SERVER: 10.96.0.10#53(10.96.0.10)</span></span>
<span class="line"><span>;; WHEN: 五 1月 12 18:12:46 CST 2024</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 112</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 10.96.0.10是kubernetes集群中的DNS服务，上诉反馈解析正常</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[l];function t(d,c){return e(),n("div",null,p)}const u=s(i,[["render",t],["__file","05.html.vue"]]),m=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/05.html","title":"05-集群验证","lang":"zh-CN","frontmatter":{"title":"05-集群验证","order":5,"icon":"lightbulb","description":"1、查看所有节点 2、查看集群健康情况，理想状态 3、真实情况 4、查看集群命令空间kube-systempod中运行情况 5、查看calico-system命名空间中pod运行情况 验证kubernetes集群的pods应用能否访问互联网呢","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/05.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"05-集群验证"}],["meta",{"property":"og:description","content":"1、查看所有节点 2、查看集群健康情况，理想状态 3、真实情况 4、查看集群命令空间kube-systempod中运行情况 5、查看calico-system命名空间中pod运行情况 验证kubernetes集群的pods应用能否访问互联网呢"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-集群验证\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、查看所有节点","slug":"_1、查看所有节点","link":"#_1、查看所有节点","children":[]},{"level":2,"title":"2、查看集群健康情况，理想状态","slug":"_2、查看集群健康情况-理想状态","link":"#_2、查看集群健康情况-理想状态","children":[]},{"level":2,"title":"3、真实情况","slug":"_3、真实情况","link":"#_3、真实情况","children":[]},{"level":2,"title":"4、查看集群命令空间kube-systempod中运行情况","slug":"_4、查看集群命令空间kube-systempod中运行情况","link":"#_4、查看集群命令空间kube-systempod中运行情况","children":[]},{"level":2,"title":"5、查看calico-system命名空间中pod运行情况","slug":"_5、查看calico-system命名空间中pod运行情况","link":"#_5、查看calico-system命名空间中pod运行情况","children":[]},{"level":2,"title":"验证kubernetes集群的pods应用能否访问互联网呢","slug":"验证kubernetes集群的pods应用能否访问互联网呢","link":"#验证kubernetes集群的pods应用能否访问互联网呢","children":[]}],"git":{},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"note/kubernetes/install/kubeadm/1 master and 2 slaves/05.md","autoDesc":true}');export{u as comp,m as data};
