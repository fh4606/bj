import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-CAdWGPj0.js";const i="/vuepress/assets/2024-03-15_142804_1352140.5953519129982098-CavLO5DO.png",l="/vuepress/assets/2024-03-15_142804_1352140.5953519129982098-CavLO5DO.png",p="/vuepress/assets/2024-03-15_142636_1064260.9627765475333173-D2K3G6Mn.png",d={},r=e(`<h2 id="一-rke2-的介绍" tabindex="-1"><a class="header-anchor" href="#一-rke2-的介绍"><span>一：RKE2 的介绍</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>k8s官方部署安装集群的是使用kubeadm方式，但是该方式比较复杂繁琐，</span></span>
<span class="line"><span>所以产生了一些新的部署安装集群方式，比如k3s和rke2等新方式k3s有着非常庞大的社区支持，</span></span>
<span class="line"><span>部署安装也非常简单，设计为轻量级的k8s,可以很好的运行在物联网设备或者边缘计算设备上面</span></span>
<span class="line"><span>据rke2官方文档描述说该部署是继承了k3s的可用性、易操作性和部署模式，</span></span>
<span class="line"><span>继承了与上游Kubernetes的紧密一致性，在一些地方，K3s与 上游的Kubernetes有</span></span>
<span class="line"><span>分歧(k3s魔改了一些k8s组件),以便为边缘部署进行优化，rke2同时也预设了安全配置，</span></span>
<span class="line"><span>符合各项安全测试规范，但是部署方式上比k3s更复杂一些</span></span>
<span class="line"><span>整体来看选择k3s和rke2都是可以用于生产环境的选择，如果更注重安全性，可以选择rke2</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>RKE2 官方文档：</span></span>
<span class="line"><span>  https://docs.rke2.io/zh/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装参考文档：</span></span>
<span class="line"><span>  https://blog.csdn.net/qq_30818545/article/details/130668212</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-rke2-安装与配置" tabindex="-1"><a class="header-anchor" href="#二-rke2-安装与配置"><span>二：RKE2 安装与配置</span></a></h2><h3 id="_2-1-主机准备" tabindex="-1"><a class="header-anchor" href="#_2-1-主机准备"><span>2.1 主机准备</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>系统：CentOS7.9x64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat /etc/hosts</span></span>
<span class="line"><span>---------</span></span>
<span class="line"><span>192.168.0.11    k8s-master01</span></span>
<span class="line"><span>192.168.0.12    k8s-master02</span></span>
<span class="line"><span>192.168.0.13    k8s-master03</span></span>
<span class="line"><span>192.168.0.14    k8s-node01</span></span>
<span class="line"><span>192.168.0.15    k8s-node02</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------</span></span>
<span class="line"><span>  系统关闭selinux /firewalld 清空 iptables 规则</span></span>
<span class="line"><span>  做好 系统的 ssh 无密钥认证</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-配置内核路由转发及网桥过滤" tabindex="-1"><a class="header-anchor" href="#_2-2-配置内核路由转发及网桥过滤"><span>2.2  配置内核路由转发及网桥过滤</span></a></h3><blockquote><p>所有主机均需要操作。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>添加网桥过滤及内核转发配置文件</span></span>
<span class="line"><span># cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span>vm.swappiness = 0</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sysctl --system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>加载br_netfilter模块</span></span>
<span class="line"><span># modprobe br_netfilter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>查看是否加载</span></span>
<span class="line"><span># lsmod | grep br_netfilter</span></span>
<span class="line"><span>br_netfilter           22256  0</span></span>
<span class="line"><span>bridge                151336  1 br_netfilter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-安装ipset及ipvsadm" tabindex="-1"><a class="header-anchor" href="#_2-3-安装ipset及ipvsadm"><span>2.3 安装ipset及ipvsadm</span></a></h3><blockquote><p>所有主机均需要操作。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>安装ipset及ipvsadm</span></span>
<span class="line"><span># yum -y install ipset ipvsadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>配置ipvsadm模块加载方式</span></span>
<span class="line"><span>添加需要加载的模块</span></span>
<span class="line"><span># cat &gt; /etc/sysconfig/modules/ipvs.modules &lt;&lt;EOF</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>modprobe -- ip_vs</span></span>
<span class="line"><span>modprobe -- ip_vs_rr</span></span>
<span class="line"><span>modprobe -- ip_vs_wrr</span></span>
<span class="line"><span>modprobe -- ip_vs_sh</span></span>
<span class="line"><span>modprobe -- nf_conntrack</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>授权、运行、检查是否加载</span></span>
<span class="line"><span># chmod 755 /etc/sysconfig/modules/ipvs.modules &amp;&amp; bash /etc/sysconfig/modules/ipvs.modules &amp;&amp; lsmod | grep -e ip_vs -e nf_conntrack</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-关闭swap分区" tabindex="-1"><a class="header-anchor" href="#_2-4-关闭swap分区"><span>2.4 关闭SWAP分区</span></a></h3><blockquote><p>修改完成后需要重启操作系统，如不重启，可临时关闭，命令为swapoff -a</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>永远关闭swap分区，需要重启操作系统</span></span>
<span class="line"><span>## 关闭swap</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swapoff -a  </span></span>
<span class="line"><span>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-rke2-的配置" tabindex="-1"><a class="header-anchor" href="#三-rke2-的配置"><span>三： RKE2 的配置</span></a></h2><h3 id="_3-1-安装-rke2-server的节点" tabindex="-1"><a class="header-anchor" href="#_3-1-安装-rke2-server的节点"><span>3.1 安装 RKE2 Server的节点</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn \\</span></span>
<span class="line"><span>INSTALL_RKE2_VERSION=v1.26.5+rke2r1 \\</span></span>
<span class="line"><span>INSTALL_RKE2_TYPE=&quot;server&quot; \\</span></span>
<span class="line"><span>sh -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rke2 --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl enable rke2-server.service  # 设置开机自启并重启</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>3.启动服务</span></span>
<span class="line"><span>systemctl start rke2-server</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>4.查看日志</span></span>
<span class="line"><span>journalctl -fu rke2-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等待10分种左右没有在报错应该rke2 就启动起来了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>设置环境变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim /etc/profile</span></span>
<span class="line"><span>export PATH=/var/lib/rancher/rke2/bin:$PATH</span></span>
<span class="line"><span>export KUBECONFIG=/etc/rancher/rke2/rke2.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使环境变量生效</span></span>
<span class="line"><span>source /etc/profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 查看集群</span></span>
<span class="line"><span>kubectl get node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat /var/lib/rancher/rke2/server/node-token # 查看令牌，后期分配给其它server节点和agent节点</span></span>
<span class="line"><span>----</span></span>
<span class="line"><span>K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span>----</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 默认情况下RKE2读取 /etc/rancher/rke2/config.yaml配置文件启动</span></span>
<span class="line"><span>mkdir -p /etc/rancher/rke2 &amp;&amp; vim /etc/rancher/rke2/config.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>token: K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tls-san:</span></span>
<span class="line"><span>  - k8s-master01</span></span>
<span class="line"><span>  - k8s-master02</span></span>
<span class="line"><span>  - k8s-master03</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># node配置</span></span>
<span class="line"><span>node-name: k8s-master01</span></span>
<span class="line"><span>node-taint: # 默认Server节点是可调度的，如果希望拥有一个不会运行用户工作负载的专用 control plane，则可以使用污点（taint）</span></span>
<span class="line"><span>  - &quot;CriticalAddonsOnly=true:NoExecute&quot;</span></span>
<span class="line"><span># 打标签</span></span>
<span class="line"><span>node-label:</span></span>
<span class="line"><span>  - &quot;node=Master&quot;                </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 设置阿里云镜像地址</span></span>
<span class="line"><span>system-default-registry: &quot;registry.cn-hangzhou.aliyuncs.com&quot;</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后从新启动rke2 server </span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl restart rke2-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl get node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>解释说明，</span></span>
<span class="line"><span>token:参数表示自定义一个token标识</span></span>
<span class="line"><span>node-name:表示配置节点名，该名称是全局唯一的，用于dns路由</span></span>
<span class="line"><span>tls-san:表示TLS证书上添加额外的主机名或IPv4/IPv6地址作为备用名称，此处填写本机IP,该参数是为了避免固定注册地址的证书错误</span></span>
<span class="line"><span>system-default-registry:表示使用国内镜像</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-安装-另外两个master" tabindex="-1"><a class="header-anchor" href="#_3-2-安装-另外两个master"><span>3.2 安装 另外两个master</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>k8s-master02/k8s-master03 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>scp /etc/rancher/rke2/config.yaml root@k8s-master02:/etc/rancher/rke2/</span></span>
<span class="line"><span>scp /etc/rancher/rke2/config.yaml root@k8s-master03:/etc/rancher/rke2/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>修改config.yaml 的节点主机名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>k8s-master02:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim  /etc/rancher/rke2/config.yaml </span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>server: https://k8s-master01:9345</span></span>
<span class="line"><span>token: K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tls-san:</span></span>
<span class="line"><span>  - k8s-master01</span></span>
<span class="line"><span>  - k8s-master02</span></span>
<span class="line"><span>  - k8s-master03</span></span>
<span class="line"><span></span></span>
<span class="line"><span># node配置</span></span>
<span class="line"><span>node-name: k8s-master02</span></span>
<span class="line"><span>#node-taint: # 默认Server节点是可调度的，如果希望拥有一个不会运行用户工作负载的专用 control plane，则可以使用污点（taint）</span></span>
<span class="line"><span>#  - &quot;CriticalAddonsOnly=true:NoExecute&quot;</span></span>
<span class="line"><span>#   # 打标签</span></span>
<span class="line"><span>#node-label:</span></span>
<span class="line"><span>#  - &quot;node=Master&quot;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#       # 设置阿里云镜像地址</span></span>
<span class="line"><span>system-default-registry: &quot;registry.cn-hangzhou.aliyuncs.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>k8s-master03 节点：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim  /etc/rancher/rke2/config.yaml </span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>server: https://k8s-master01:9345</span></span>
<span class="line"><span>token: K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tls-san:</span></span>
<span class="line"><span>  - k8s-master01</span></span>
<span class="line"><span>  - k8s-master02</span></span>
<span class="line"><span>  - k8s-master03</span></span>
<span class="line"><span></span></span>
<span class="line"><span># node配置</span></span>
<span class="line"><span>node-name: k8s-master03</span></span>
<span class="line"><span>#node-taint: # 默认Server节点是可调度的，如果希望拥有一个不会运行用户工作负载的专用 control plane，则可以使用污点（taint）</span></span>
<span class="line"><span>#  - &quot;CriticalAddonsOnly=true:NoExecute&quot;</span></span>
<span class="line"><span>#   # 打标签</span></span>
<span class="line"><span>#node-label:</span></span>
<span class="line"><span>#  - &quot;node=Master&quot;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#       # 设置阿里云镜像地址</span></span>
<span class="line"><span>system-default-registry: &quot;registry.cn-hangzhou.aliyuncs.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>启动k8s-master02/k8s-master03节点rke2-server </span></span>
<span class="line"><span>systemctl enable rke2-server</span></span>
<span class="line"><span>systemctl start rke2-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>journalctl -fu rke2-server.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-安装-rke2-agent-节点" tabindex="-1"><a class="header-anchor" href="#_3-3-安装-rke2-agent-节点"><span>3.3 安装 rke2 Agent 节点</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn \\</span></span>
<span class="line"><span>INSTALL_RKE2_VERSION=v1.26.5+rke2r1 \\</span></span>
<span class="line"><span>INSTALL_RKE2_TYPE=&quot;agent&quot; \\</span></span>
<span class="line"><span>sh -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>k8s-node01:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>添加配置文件</span></span>
<span class="line"><span># 默认情况下，RKE2 将使用 /etc/rancher/rke2/config.yaml YAML 文件中的值来启动</span></span>
<span class="line"><span>cd /etc/rancher/rke2 &amp;&amp; vim /etc/rancher/rke2/config.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>server: https://k8s-master01:9345</span></span>
<span class="line"><span>token: K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span></span></span>
<span class="line"><span># node 配置</span></span>
<span class="line"><span>node-name: k8s-node01</span></span>
<span class="line"><span># # 打标签</span></span>
<span class="line"><span># node-label:</span></span>
<span class="line"><span>#   - &quot;node=agent&quot;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#    #设置阿里云镜像地址，加速下载</span></span>
<span class="line"><span>system-default-registry: &quot;registry.cn-hangzhou.aliyuncs.com&quot;</span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>k8s-node02:</span></span>
<span class="line"><span>添加配置文件</span></span>
<span class="line"><span># 默认情况下，RKE2 将使用 /etc/rancher/rke2/config.yaml YAML 文件中的值来启动</span></span>
<span class="line"><span>cd /etc/rancher/rke2 &amp;&amp; vim /etc/rancher/rke2/config.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>server: https://k8s-master01:9345</span></span>
<span class="line"><span>token: K109c355f3b21bf939951e04fc6b7f8b2e42554ac447783af4ebd88f9921b8079ae::server:793868d1902a9b74f40e530d7ac2bb6b</span></span>
<span class="line"><span></span></span>
<span class="line"><span># node 配置</span></span>
<span class="line"><span>node-name: k8s-node02</span></span>
<span class="line"><span># # 打标签</span></span>
<span class="line"><span># node-label:</span></span>
<span class="line"><span>#   - &quot;node=agent&quot;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#    #设置阿里云镜像地址，加速下载</span></span>
<span class="line"><span>system-default-registry: &quot;registry.cn-hangzhou.aliyuncs.com&quot;</span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>启动k8s-node01/k8s-node02 主机的RKE2的agent </span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl enable rke2-agent.service # 设置开机自启</span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl start rke2-agent ## 启动rke2-agent </span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 启动 时间过长大约2分钟左右</span></span>
<span class="line"><span></span></span>
<span class="line"><span>journalctl -fu rke2-agent.service  ### 查看rke2-agent 启动状态</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四-初始化集群的一些操作" tabindex="-1"><a class="header-anchor" href="#四-初始化集群的一些操作"><span>四：初始化集群的一些操作</span></a></h2><h3 id="_4-1-集群的kubeconfig-文件" tabindex="-1"><a class="header-anchor" href="#_4-1-集群的kubeconfig-文件"><span>4.1 集群的kubeconfig 文件：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>导出集群的kubeconfig 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p ~/.kube &amp;&amp; cp -ap /etc/rancher/rke2/rke2.yaml ~/.kube/config &amp;&amp; chmod 600 ~/.kube/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim /etc/profile </span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>export PATH=/var/lib/rancher/rke2/bin:$PATH</span></span>
<span class="line"><span>export KUBECONFIG=/etc/rancher/rke2/rke2.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>source /etc/profile </span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl get node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-crictl-和-ctr-查看镜像" tabindex="-1"><a class="header-anchor" href="#_4-2-crictl-和-ctr-查看镜像"><span>4.2 crictl 和 ctr 查看镜像</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>所有节点都需要 不然查看不了镜像：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cp -ap /var/lib/rancher/rke2/agent/etc/crictl.yaml /etc/</span></span>
<span class="line"><span>ln -s /run/k3s/containerd/containerd.sock /run/containerd/containerd.sock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-nerdctl-与-buildkit-的-安装" tabindex="-1"><a class="header-anchor" href="#_4-3-nerdctl-与-buildkit-的-安装"><span>4.3 nerdctl 与 buildkit 的 安装</span></a></h3><h4 id="_4-3-1-nerdctl-安装" tabindex="-1"><a class="header-anchor" href="#_4-3-1-nerdctl-安装"><span>4.3.1 nerdctl 安装：</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>nerdctl 安装：</span></span>
<span class="line"><span># nerdctl插件下载地址：https://github.com/containerd/nerdctl/releases/tag/v1.4.0</span></span>
<span class="line"><span># wget https://github.com/containerd/nerdctl/releases/download/v1.4.0/nerdctl-1.4.0-linux-amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 上传nerdctl安装包</span></span>
<span class="line"><span>https://github.com/containerd/nerdctl/releases/download/v1.4.0/nerdctl-1.4.0-linux-amd64.tar.gz</span></span>
<span class="line"><span># 解压文件到 /usr/local/bin/</span></span>
<span class="line"><span>tar zxvf nerdctl-1.4.0-linux-amd64.tar.gz -C /usr/local/bin/</span></span>
<span class="line"><span># 查看版本</span></span>
<span class="line"><span>nerdctl -v</span></span>
<span class="line"><span>nerdctl pull hello-world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># nerdctl命令补全</span></span>
<span class="line"><span>vim /etc/profile</span></span>
<span class="line"><span>source &lt;(nerdctl completion bash)</span></span>
<span class="line"><span>source /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-安装buildkit" tabindex="-1"><a class="header-anchor" href="#_4-3-2-安装buildkit"><span>4.3.2 安装buildkit</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span># 下载文件 https://github.com/moby/buildkit</span></span>
<span class="line"><span>wget https://github.com/moby/buildkit/releases/download/v0.11.6/buildkit-v0.11.6.linux-amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建解压的目录</span></span>
<span class="line"><span>mkdir -p /usr/local/buildkit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解压到指定的目录</span></span>
<span class="line"><span>tar -xf buildkit-v0.11.6.linux-amd64.tar.gz -C /usr/local/buildkit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看解压的目录</span></span>
<span class="line"><span>yum -y install tree</span></span>
<span class="line"><span>tree /usr/local/buildkit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>修改PATH环境变量</span></span>
<span class="line"><span># 注意这里的echo 要使用单引号，单引号会原样输出，双引号会解析变量</span></span>
<span class="line"><span>echo &#39;export PATH=/usr/local/buildkit/bin:$PATH&#39; &gt;&gt; /etc/profile</span></span>
<span class="line"><span>cat /etc/profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使刚才配置生效</span></span>
<span class="line"><span>source /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>创建buildkitd自启动服务</span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt; /usr/lib/systemd/system/buildkitd.service</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=buildkitd</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=/usr/local/buildkit/bin/buildkitd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span># 重新加载Unit file</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span># 启动服务</span></span>
<span class="line"><span>systemctl start buildkitd</span></span>
<span class="line"><span># 开机自启动</span></span>
<span class="line"><span>systemctl enable buildkitd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-rke2-的证书更新问题" tabindex="-1"><a class="header-anchor" href="#_4-4-rke2-的证书更新问题"><span>4.4 rke2 的证书更新问题</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl stop rke2-server # 停止服务  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>rke2 certificate rotate # 更新证书 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl restart rke2-server # 启动服务</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-部署一个nginx测试服务" tabindex="-1"><a class="header-anchor" href="#_4-5-部署一个nginx测试服务"><span>4.5 部署一个nginx测试服务：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>部署一个nginx:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim web.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>#apiVersion: extensions/v1beta1</span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: web-deployment-label</span></span>
<span class="line"><span>  name: web-deployment</span></span>
<span class="line"><span>  namespace: default</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      app: web-selector</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        app: web-selector</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: web-container</span></span>
<span class="line"><span>        image: nginx:latest</span></span>
<span class="line"><span>        imagePullPolicy: Always</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - containerPort: 80</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>          name: http</span></span>
<span class="line"><span>        - containerPort: 443</span></span>
<span class="line"><span>          protocol: TCP</span></span>
<span class="line"><span>          name: https</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: web-service-label</span></span>
<span class="line"><span>  name: web-service</span></span>
<span class="line"><span>  namespace: default</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  type: NodePort</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  - name: http</span></span>
<span class="line"><span>    port: 80</span></span>
<span class="line"><span>    protocol: TCP</span></span>
<span class="line"><span>    targetPort: 80</span></span>
<span class="line"><span>    nodePort: 30080</span></span>
<span class="line"><span>  - name: https</span></span>
<span class="line"><span>    port: 443</span></span>
<span class="line"><span>    protocol: TCP</span></span>
<span class="line"><span>    targetPort: 443</span></span>
<span class="line"><span>    nodePort: 30443</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    app: web-selector</span></span>
<span class="line"><span></span></span>
<span class="line"><span>----</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl apply -f web.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>查看服务：</span></span>
<span class="line"><span>    kubectl get deploy,svc,pod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>访问：</span></span>
<span class="line"><span>  http://192.168.0.11:30080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',62),c=[r];function t(v,b){return a(),n("div",null,c)}const m=s(d,[["render",t],["__file","01.html.vue"]]),o=JSON.parse('{"path":"/note/kubernetes/install/rke/01.html","title":"01-RKE2 部署K8S1.26.5 高可用集群","lang":"zh-CN","frontmatter":{"title":"01-RKE2 部署K8S1.26.5 高可用集群","order":1,"icon":"lightbulb","description":"一：RKE2 的介绍 二：RKE2 安装与配置 2.1 主机准备 2.2 配置内核路由转发及网桥过滤 所有主机均需要操作。 2.3 安装ipset及ipvsadm 所有主机均需要操作。 2.4 关闭SWAP分区 修改完成后需要重启操作系统，如不重启，可临时关闭，命令为swapoff -a 三： RKE2 的配置 3.1 安装 RKE2 Server的节...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/kubernetes/install/rke/01.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-RKE2 部署K8S1.26.5 高可用集群"}],["meta",{"property":"og:description","content":"一：RKE2 的介绍 二：RKE2 安装与配置 2.1 主机准备 2.2 配置内核路由转发及网桥过滤 所有主机均需要操作。 2.3 安装ipset及ipvsadm 所有主机均需要操作。 2.4 关闭SWAP分区 修改完成后需要重启操作系统，如不重启，可临时关闭，命令为swapoff -a 三： RKE2 的配置 3.1 安装 RKE2 Server的节..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-RKE2 部署K8S1.26.5 高可用集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"一：RKE2 的介绍","slug":"一-rke2-的介绍","link":"#一-rke2-的介绍","children":[]},{"level":2,"title":"二：RKE2 安装与配置","slug":"二-rke2-安装与配置","link":"#二-rke2-安装与配置","children":[{"level":3,"title":"2.1 主机准备","slug":"_2-1-主机准备","link":"#_2-1-主机准备","children":[]},{"level":3,"title":"2.2  配置内核路由转发及网桥过滤","slug":"_2-2-配置内核路由转发及网桥过滤","link":"#_2-2-配置内核路由转发及网桥过滤","children":[]},{"level":3,"title":"2.3 安装ipset及ipvsadm","slug":"_2-3-安装ipset及ipvsadm","link":"#_2-3-安装ipset及ipvsadm","children":[]},{"level":3,"title":"2.4 关闭SWAP分区","slug":"_2-4-关闭swap分区","link":"#_2-4-关闭swap分区","children":[]}]},{"level":2,"title":"三： RKE2 的配置","slug":"三-rke2-的配置","link":"#三-rke2-的配置","children":[{"level":3,"title":"3.1 安装 RKE2 Server的节点","slug":"_3-1-安装-rke2-server的节点","link":"#_3-1-安装-rke2-server的节点","children":[]},{"level":3,"title":"3.2 安装 另外两个master","slug":"_3-2-安装-另外两个master","link":"#_3-2-安装-另外两个master","children":[]},{"level":3,"title":"3.3 安装 rke2 Agent 节点","slug":"_3-3-安装-rke2-agent-节点","link":"#_3-3-安装-rke2-agent-节点","children":[]}]},{"level":2,"title":"四：初始化集群的一些操作","slug":"四-初始化集群的一些操作","link":"#四-初始化集群的一些操作","children":[{"level":3,"title":"4.1 集群的kubeconfig 文件：","slug":"_4-1-集群的kubeconfig-文件","link":"#_4-1-集群的kubeconfig-文件","children":[]},{"level":3,"title":"4.2 crictl 和 ctr 查看镜像","slug":"_4-2-crictl-和-ctr-查看镜像","link":"#_4-2-crictl-和-ctr-查看镜像","children":[]},{"level":3,"title":"4.3 nerdctl 与 buildkit 的 安装","slug":"_4-3-nerdctl-与-buildkit-的-安装","link":"#_4-3-nerdctl-与-buildkit-的-安装","children":[]},{"level":3,"title":"4.4 rke2 的证书更新问题","slug":"_4-4-rke2-的证书更新问题","link":"#_4-4-rke2-的证书更新问题","children":[]},{"level":3,"title":"4.5 部署一个nginx测试服务：","slug":"_4-5-部署一个nginx测试服务","link":"#_4-5-部署一个nginx测试服务","children":[]}]}],"git":{},"readingTime":{"minutes":6.24,"words":1872},"filePathRelative":"note/kubernetes/install/rke/01.md","autoDesc":true}');export{m as comp,o as data};
