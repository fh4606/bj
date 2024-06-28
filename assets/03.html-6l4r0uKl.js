import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as e}from"./app-DuswJAHG.js";const i="/vuepress/assets/2024-01-12_171337_4197090.14341097456649332-DmTB-Maq.png",l="/vuepress/assets/2024-01-12_171815_7496900.5290314846882166-UYP4UwIZ.png",c={},t=e(`<p><strong>前面我们已经初始化了集群，接着本章介绍如何配置网络</strong></p><h3 id="_1、集群网络准备" tabindex="-1"><a class="header-anchor" href="#_1、集群网络准备"><span>1、集群网络准备</span></a></h3><blockquote><p>使用calico部署集群网络，版本为3.21版 安装参考网址：https://docs.tigera.io/archive/v3.21/getting-started/kubernetes/quickstart</p></blockquote><h3 id="_2、安装calico" tabindex="-1"><a class="header-anchor" href="#_2、安装calico"><span>2、安装calico</span></a></h3><h3 id="_2-1、运行calico的yaml文件" tabindex="-1"><a class="header-anchor" href="#_2-1、运行calico的yaml文件"><span>2.1、运行calico的yaml文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#运行calicon文件，无需配置改变，直接运行</span></span>
<span class="line"><span>kubectl create -f https://docs.projectcalico.org/archive/v3.21/manifests/tigera-operator.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、运行calico的核心文件" tabindex="-1"><a class="header-anchor" href="#_2-2、运行calico的核心文件"><span>2.2、运行calico的核心文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#不建议直接使用需要修改，符合kubernetes集群环境才行，因此先下载到本地</span></span>
<span class="line"><span>#kubectl create -f https://docs.projectcalico.org/archive/v3.21/manifests/custom-resources.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir calicodir</span></span>
<span class="line"><span>cd calicodir</span></span>
<span class="line"><span>wget https://docs.projectcalico.org/archive/v3.21/manifests/custom-resources.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需要修改的地方如下：</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# cat custom-resources.yaml </span></span>
<span class="line"><span># This section includes base Calico installation configuration.</span></span>
<span class="line"><span># For more information, see: https://docs.projectcalico.org/v3.21/reference/installation/api#operator.tigera.io/v1.Installation</span></span>
<span class="line"><span>apiVersion: operator.tigera.io/v1</span></span>
<span class="line"><span>kind: Installation</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: default</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  # Configures Calico networking.</span></span>
<span class="line"><span>  calicoNetwork:</span></span>
<span class="line"><span>    # Note: The ipPools section cannot be modified post-install.</span></span>
<span class="line"><span>    ipPools:</span></span>
<span class="line"><span>    - blockSize: 26</span></span>
<span class="line"><span>      cidr: 10.244.0.0/16      -----&gt;这个地方需要做修改</span></span>
<span class="line"><span>      encapsulation: VXLANCrossSubnet</span></span>
<span class="line"><span>      natOutgoing: Enabled</span></span>
<span class="line"><span>      nodeSelector: all()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This section configures the Calico API server.</span></span>
<span class="line"><span># For more information, see: https://docs.projectcalico.org/v3.21/reference/installation/api#operator.tigera.io/v1.APIServer</span></span>
<span class="line"><span>apiVersion: operator.tigera.io/v1</span></span>
<span class="line"><span>kind: APIServer </span></span>
<span class="line"><span>metadata: </span></span>
<span class="line"><span>  name: default </span></span>
<span class="line"><span>spec: {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>接着对该资源清单文件进行使用</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# kubectl apply -f custom-resources.yaml </span></span>
<span class="line"><span>installation.operator.tigera.io/default created</span></span>
<span class="line"><span>apiserver.operator.tigera.io/default created</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##使用如下命令进行查看</span></span>
<span class="line"><span>[root@master01 calicodir]# kubectl get ns</span></span>
<span class="line"><span>NAME              STATUS   AGE</span></span>
<span class="line"><span>calico-system     Active   48s       ##创建了一个命名空间</span></span>
<span class="line"><span>default           Active   71m</span></span>
<span class="line"><span>kube-node-lease   Active   71m</span></span>
<span class="line"><span>kube-public       Active   71m</span></span>
<span class="line"><span>kube-system       Active   71m</span></span>
<span class="line"><span>tigera-operator   Active   4m59s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##我们可以查看calico-system命名空间下有哪些pod，运行时间比较长</span></span>
<span class="line"><span>[root@master01 calicodir]# kubectl get pods -n calico-system</span></span>
<span class="line"><span>NAME                                       READY   STATUS              RESTARTS   AGE</span></span>
<span class="line"><span>calico-kube-controllers-77b5cb49c9-k5xwx   0/1     Pending             0          2m32s</span></span>
<span class="line"><span>calico-node-94jk9                          0/1     Init:0/2            0          2m32s</span></span>
<span class="line"><span>calico-typha-59b75b7c59-hqgc4              0/1     ContainerCreating   0          2m32s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##官方建议直接使用watch命令查看，直到他全部运行为止</span></span>
<span class="line"><span>watch kubectl get pods -n calico-system</span></span>
<span class="line"><span>##我们发现特别慢，原因是因为kubernetes的master节点不允许做工作负载调度，因此需要一个操作，取消污点，命令如下：</span></span>
<span class="line"><span>kubectl taint nodes --all node-role.kubernetes.io/master-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##接着我们再次查看，等待直到完成</span></span>
<span class="line"><span>watch kubectl get pods -n calico-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><img src="'+l+`" alt="" loading="lazy"><strong>到此我们的calico在kubernetes集群中就已经部署起来了</strong></p><h3 id="_3、安装calico客户端" tabindex="-1"><a class="header-anchor" href="#_3、安装calico客户端"><span>3、安装calico客户端</span></a></h3><blockquote><p>我们如何查看master节点是否加入到calico中呢，这个时候需要用到客户端了。</p></blockquote><h4 id="_3-1、下载二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-1、下载二进制文件"><span>3.1、下载二进制文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -L https://github.com/projectcalico/calicoctl/releases/download/v3.21.6/calicoctl-linux-amd64 -o calicoctl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-2、安装、修改权限、查看版本" tabindex="-1"><a class="header-anchor" href="#_3-2、安装、修改权限、查看版本"><span>3.2、安装、修改权限、查看版本</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# mv calicoctl /usr/bin/</span></span>
<span class="line"><span>[root@master01 calicodir]# chmod +x /usr/bin/calicoctl</span></span>
<span class="line"><span>[root@master01 calicodir]# ls /usr/bin/calicoctl</span></span>
<span class="line"><span>/usr/bin/calicoctl</span></span>
<span class="line"><span>[root@master01 calicodir]# calicoctl version</span></span>
<span class="line"><span>Client Version:    v3.21.6</span></span>
<span class="line"><span>Git commit:        94154c96e</span></span>
<span class="line"><span>Cluster Version:   v3.21.6</span></span>
<span class="line"><span>Cluster Type:      typha,kdd,k8s,operator,bgp,kubeadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3、在calico中查看master节点是否加入" tabindex="-1"><a class="header-anchor" href="#_3-3、在calico中查看master节点是否加入"><span>3.3、在calico中查看master节点是否加入</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 calicodir]# DATASTORE_TYPE=kubernetes KUBECONFIG=~/.kube/config calicoctl get nodes</span></span>
<span class="line"><span>NAME</span></span>
<span class="line"><span>master01</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=[t];function r(d,o){return n(),a("div",null,p)}const m=s(c,[["render",r],["__file","03.html.vue"]]),h=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/03.html","title":"03-配置网络","lang":"zh-CN","frontmatter":{"title":"03-配置网络","order":3,"icon":"lightbulb","description":"前面我们已经初始化了集群，接着本章介绍如何配置网络 1、集群网络准备 使用calico部署集群网络，版本为3.21版 安装参考网址：https://docs.tigera.io/archive/v3.21/getting-started/kubernetes/quickstart 2、安装calico 2.1、运行calico的yaml文件 2.2、运...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/03.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"03-配置网络"}],["meta",{"property":"og:description","content":"前面我们已经初始化了集群，接着本章介绍如何配置网络 1、集群网络准备 使用calico部署集群网络，版本为3.21版 安装参考网址：https://docs.tigera.io/archive/v3.21/getting-started/kubernetes/quickstart 2、安装calico 2.1、运行calico的yaml文件 2.2、运..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-配置网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、集群网络准备","slug":"_1、集群网络准备","link":"#_1、集群网络准备","children":[]},{"level":3,"title":"2、安装calico","slug":"_2、安装calico","link":"#_2、安装calico","children":[]},{"level":3,"title":"2.1、运行calico的yaml文件","slug":"_2-1、运行calico的yaml文件","link":"#_2-1、运行calico的yaml文件","children":[]},{"level":3,"title":"2.2、运行calico的核心文件","slug":"_2-2、运行calico的核心文件","link":"#_2-2、运行calico的核心文件","children":[]},{"level":3,"title":"3、安装calico客户端","slug":"_3、安装calico客户端","link":"#_3、安装calico客户端","children":[]}],"git":{},"readingTime":{"minutes":2.08,"words":624},"filePathRelative":"note/kubernetes/install/kubeadm/1 master and 2 slaves/03.md","autoDesc":true}');export{m as comp,h as data};
