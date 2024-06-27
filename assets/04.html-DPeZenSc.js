import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-Bna6fuy1.js";const i={},l=a(`<h3 id="_1、添加工作节点" tabindex="-1"><a class="header-anchor" href="#_1、添加工作节点"><span>1、添加工作节点</span></a></h3><blockquote><p>因容器镜像下载较慢，可能会导致报错，主要错误为没有准备好cni(集群网络插件)，如有网络，请耐心等待即可。</p></blockquote><h4 id="_1-1、添加第一台工作节点" tabindex="-1"><a class="header-anchor" href="#_1-1、添加第一台工作节点"><span>1.1、添加第一台工作节点</span></a></h4><blockquote><p>在工作节点上操作，worker01</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@worker01 ~]# kubeadm join 192.168.10.21:6443 --token znfrhi.y196yb8th9q6q54q \\</span></span>
<span class="line"><span>&gt;         --discovery-token-ca-cert-hash sha256:e520c6014d9c3f835fb59090c0867e11c43e8fec1009467ea0c3510cdd484b8a </span></span>
<span class="line"><span>[preflight] Running pre-flight checks</span></span>
<span class="line"><span>        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 24.0.7. Latest validated version: 20.10</span></span>
<span class="line"><span>[preflight] Reading configuration from the cluster...</span></span>
<span class="line"><span>[preflight] FYI: You can look at this config file with &#39;kubectl -n kube-system get cm kubeadm-config -o yaml&#39;</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span></span>
<span class="line"><span>[kubelet-start] Starting the kubelet</span></span>
<span class="line"><span>[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This node has joined the cluster:</span></span>
<span class="line"><span>* Certificate signing request was sent to apiserver and a response was received.</span></span>
<span class="line"><span>* The Kubelet was informed of the new secure connection details.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Run &#39;kubectl get nodes&#39; on the control-plane to see this node join the cluster.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2、添加第二台工作节点" tabindex="-1"><a class="header-anchor" href="#_1-2、添加第二台工作节点"><span>1.2、添加第二台工作节点</span></a></h4><blockquote><p>在工作节点上操作，worker02</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@worker02 ~]# kubeadm join 192.168.10.21:6443 --token znfrhi.y196yb8th9q6q54q \\</span></span>
<span class="line"><span>&gt;         --discovery-token-ca-cert-hash sha256:e520c6014d9c3f835fb59090c0867e11c43e8fec1009467ea0c3510cdd484b8a </span></span>
<span class="line"><span>[preflight] Running pre-flight checks</span></span>
<span class="line"><span>        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 24.0.7. Latest validated version: 20.10</span></span>
<span class="line"><span>[preflight] Reading configuration from the cluster...</span></span>
<span class="line"><span>[preflight] FYI: You can look at this config file with &#39;kubectl -n kube-system get cm kubeadm-config -o yaml&#39;</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span></span>
<span class="line"><span>[kubelet-start] Starting the kubelet</span></span>
<span class="line"><span>[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This node has joined the cluster:</span></span>
<span class="line"><span>* Certificate signing request was sent to apiserver and a response was received.</span></span>
<span class="line"><span>* The Kubelet was informed of the new secure connection details.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Run &#39;kubectl get nodes&#39; on the control-plane to see this node join the cluster.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4、返回master节点进行查看" tabindex="-1"><a class="header-anchor" href="#_1-4、返回master节点进行查看"><span>1.4、返回master节点进行查看</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl get nodes</span></span>
<span class="line"><span>NAME       STATUS     ROLES                  AGE    VERSION</span></span>
<span class="line"><span>master01   Ready      control-plane,master   119m   v1.21.0</span></span>
<span class="line"><span>worker01   NotReady   &lt;none&gt;                 109s   v1.21.0</span></span>
<span class="line"><span>worker02   NotReady   &lt;none&gt;                 99s    v1.21.0</span></span>
<span class="line"><span>##为什么这个地方worker01和worker02显示NotReady，因为网络问题，我们可以使用命令查看一下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@master01 calicodir]# kubectl get pods -n calico-system -o wide</span></span>
<span class="line"><span>NAME                                       READY   STATUS              RESTARTS   AGE     IP              NODE       NOMINATED NODE   READINESS GATES</span></span>
<span class="line"><span>calico-kube-controllers-77b5cb49c9-k5xwx   1/1     Running             0          53m     10.244.241.66   master01   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>calico-node-94jk9                          1/1     Running             0          53m     192.168.10.21   master01   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>calico-node-vrm5x                          0/1     Init:1/2            0          6m2s    192.168.10.22   worker01   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>calico-node-zbtmj                          0/1     Init:1/2            0          5m52s   192.168.10.23   worker02   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>calico-typha-59b75b7c59-6zxfr              0/1     ContainerCreating   0          5m43s   192.168.10.22   worker01   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>calico-typha-59b75b7c59-hqgc4              1/1     Running             0          53m     192.168.10.21   master01   &lt;none&gt;           &lt;none&gt;</span></span>
<span class="line"><span>##我们可以看到对应的pods正在初始化中，所以worker01和worker02显示NotReady，等待一会儿。</span></span>
<span class="line"><span>[root@master01 calicodir]# kubectl get nodes</span></span>
<span class="line"><span>NAME       STATUS   ROLES                  AGE    VERSION</span></span>
<span class="line"><span>master01   Ready    control-plane,master   131m   v1.21.0</span></span>
<span class="line"><span>worker01   Ready    &lt;none&gt;                 13m    v1.21.0</span></span>
<span class="line"><span>worker02   Ready    &lt;none&gt;                 13m    v1.21.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[l];function r(p,c){return e(),s("div",null,t)}const u=n(i,[["render",r],["__file","04.html.vue"]]),v=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/04.html","title":"04-添加工作节点","lang":"zh-CN","frontmatter":{"title":"04-添加工作节点","order":4,"icon":"lightbulb","description":"1、添加工作节点 因容器镜像下载较慢，可能会导致报错，主要错误为没有准备好cni(集群网络插件)，如有网络，请耐心等待即可。 1.1、添加第一台工作节点 在工作节点上操作，worker01 1.2、添加第二台工作节点 在工作节点上操作，worker02 1.4、返回master节点进行查看","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/04.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"04-添加工作节点"}],["meta",{"property":"og:description","content":"1、添加工作节点 因容器镜像下载较慢，可能会导致报错，主要错误为没有准备好cni(集群网络插件)，如有网络，请耐心等待即可。 1.1、添加第一台工作节点 在工作节点上操作，worker01 1.2、添加第二台工作节点 在工作节点上操作，worker02 1.4、返回master节点进行查看"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-添加工作节点\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、添加工作节点","slug":"_1、添加工作节点","link":"#_1、添加工作节点","children":[]}],"git":{},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"note/kubernetes/install/kubeadm/1 master and 2 slaves/04.md","autoDesc":true}');export{u as comp,v as data};
