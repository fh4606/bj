import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as a}from"./app-DuswJAHG.js";const i={},l=a(`<h3 id="_1、集群软件版本说明" tabindex="-1"><a class="header-anchor" href="#_1、集群软件版本说明"><span>1、集群软件版本说明</span></a></h3><table><thead><tr><th></th><th>kubeadm</th><th>kubelet</th><th>kubectl</th></tr></thead><tbody><tr><td>版本</td><td>1.21.0</td><td>1.21.0</td><td>1.21.0</td></tr><tr><td>安装位置</td><td>集群所有主机</td><td>集群所有主机</td><td>集群所有主机</td></tr><tr><td>作用</td><td>初始化集群</td><td>用于接受api-server指令，对pod生命周期进行管理</td><td>集群应用命令行管理工具</td></tr></tbody></table><h3 id="_2、配置kubernetes源" tabindex="-1"><a class="header-anchor" href="#_2、配置kubernetes源"><span>2、配置kubernetes源</span></a></h3><blockquote><p>以master01为例，所有主机都配置，kubernetes源为阿里云源，地址：https://developer.aliyun.com/mirror/kubernetes?spm=a2c6h.13651102.0.0.1e121b11vsbmJg</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF &gt; /etc/yum.repos.d/kubernetes.repo</span></span>
<span class="line"><span>[kubernetes]</span></span>
<span class="line"><span>name=Kubernetes</span></span>
<span class="line"><span>baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>repo_gpgcheck=1</span></span>
<span class="line"><span>gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#yum list缓存一下</span></span>
<span class="line"><span>yum list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、集群软件安装" tabindex="-1"><a class="header-anchor" href="#_3、集群软件安装"><span>3、集群软件安装</span></a></h3><blockquote><p>以master01为例，其他主机均装</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#查看指定版本</span></span>
<span class="line"><span>yum list kubeadm.x86_64 --showduplicates | sort -r</span></span>
<span class="line"><span>yum list kubelet.x86_64 --showduplicates | sort -r</span></span>
<span class="line"><span>yum list kubectl.x86_64 --showduplicates | sort -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装kubeadm、kubelet、kubectl的1.21.0版本</span></span>
<span class="line"><span>yum install -y --setopt=obsoletes=0 kubeadm-1.21.0-0 kubelet-1.21.0-0 kubectl-1.21.0-0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装完成后查看版本</span></span>
<span class="line"><span>kubeadm version</span></span>
<span class="line"><span>kubelet --version</span></span>
<span class="line"><span>kubectl version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、配置kubelet" tabindex="-1"><a class="header-anchor" href="#_4、配置kubelet"><span>4、配置kubelet</span></a></h3><blockquote><p>以master1为例，为了实现docker使用cgroupdriver于kubelet使用的cgroup的一致性，建议修改如下文件内容，所有主机均修改。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF &gt; /etc/sysconfig/kubelet</span></span>
<span class="line"><span>KUBELET_EXTRA_ARGS=&quot;--cgroup-driver=systemd&quot;</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以master01为例，设置kubelet开机自动启动，<em>这个地方不要手动启动</em>，由于没有生成配置文件，集群初始化后自动启动</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl enable kubelet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5、集群镜像准备" tabindex="-1"><a class="header-anchor" href="#_5、集群镜像准备"><span>5、集群镜像准备</span></a></h3><blockquote><p>以master1为例，查看kubernetes1.21.0需要使用的镜像，并下载镜像，可用VPN下载，其它主机均配置。</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 ~]# kubeadm config images list --kubernetes-version=v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-apiserver:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-controller-manager:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-scheduler:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-proxy:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/pause:3.4.1</span></span>
<span class="line"><span>k8s.gcr.io/etcd:3.4.13-0</span></span>
<span class="line"><span>k8s.gcr.io/coredns/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#从阿里云下载</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.21.0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.21.0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.21.0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.21.0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.4.1</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#需要修改下名字于kubernetes官方名字对应</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.21.0 k8s.gcr.io/kube-apiserver:v1.21.0</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.21.0 k8s.gcr.io/kube-controller-manager:v1.21.0</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.21.0 k8s.gcr.io/kube-scheduler:v1.21.0</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.21.0 k8s.gcr.io/kube-proxy:v1.21.0</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.4.1 k8s.gcr.io/pause:3.4.1</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0 k8s.gcr.io/etcd:3.4.13-0</span></span>
<span class="line"><span>docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:v1.8.0 k8s.gcr.io/coredns/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#删除掉下载的镜像</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.21.0</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.21.0</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.21.0</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.21.0</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.4.1</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0</span></span>
<span class="line"><span>docker rmi -f registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##最后查看镜像于kubernetes要求是否一致</span></span>
<span class="line"><span>[root@master01 ~]# kubeadm config images list --kubernetes-version=v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-apiserver:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-controller-manager:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-scheduler:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/kube-proxy:v1.21.0</span></span>
<span class="line"><span>k8s.gcr.io/pause:3.4.1</span></span>
<span class="line"><span>k8s.gcr.io/etcd:3.4.13-0</span></span>
<span class="line"><span>k8s.gcr.io/coredns/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@master01 ~]# docker images</span></span>
<span class="line"><span>REPOSITORY                           TAG        IMAGE ID       CREATED       SIZE</span></span>
<span class="line"><span>k8s.gcr.io/kube-apiserver            v1.21.0    4d217480042e   2 years ago   126MB</span></span>
<span class="line"><span>k8s.gcr.io/kube-proxy                v1.21.0    38ddd85fe90e   2 years ago   122MB</span></span>
<span class="line"><span>k8s.gcr.io/kube-controller-manager   v1.21.0    09708983cc37   2 years ago   120MB</span></span>
<span class="line"><span>k8s.gcr.io/kube-scheduler            v1.21.0    62ad3129eca8   2 years ago   50.6MB</span></span>
<span class="line"><span>k8s.gcr.io/pause                     3.4.1      0f8457a4c2ec   2 years ago   683kB</span></span>
<span class="line"><span>k8s.gcr.io/coredns/coredns           v1.8.0     296a6d5035e2   3 years ago   42.5MB</span></span>
<span class="line"><span>k8s.gcr.io/etcd                      3.4.13-0   0369cf4303ff   3 years ago   253MB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、在master01节点上配置集群初始化" tabindex="-1"><a class="header-anchor" href="#_6、在master01节点上配置集群初始化"><span>6、在master01节点上配置集群初始化</span></a></h3><h4 id="_6-1、在master上操作" tabindex="-1"><a class="header-anchor" href="#_6-1、在master上操作"><span>6.1、在master上操作</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm init --kubernetes-version=v1.21.0 --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=192.168.10.21</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>输出信息做保存后面需要使用</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[init] Using Kubernetes version: v1.21.0</span></span>
<span class="line"><span>[preflight] Running pre-flight checks</span></span>
<span class="line"><span>        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 24.0.7. Latest validated version: 20.10</span></span>
<span class="line"><span>[preflight] Pulling images required for setting up a Kubernetes cluster</span></span>
<span class="line"><span>[preflight] This might take a minute or two, depending on the speed of your internet connection</span></span>
<span class="line"><span>[preflight] You can also perform this action in beforehand using &#39;kubeadm config images pull&#39;</span></span>
<span class="line"><span>[certs] Using certificateDir folder &quot;/etc/kubernetes/pki&quot;</span></span>
<span class="line"><span>[certs] Generating &quot;ca&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;apiserver&quot; certificate and key</span></span>
<span class="line"><span>[certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master01] and IPs [10.96.0.1 192.168.10.21]</span></span>
<span class="line"><span>[certs] Generating &quot;apiserver-kubelet-client&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;front-proxy-ca&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;front-proxy-client&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;etcd/ca&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;etcd/server&quot; certificate and key</span></span>
<span class="line"><span>[certs] etcd/server serving cert is signed for DNS names [localhost master01] and IPs [192.168.10.21 127.0.0.1 ::1]</span></span>
<span class="line"><span>[certs] Generating &quot;etcd/peer&quot; certificate and key</span></span>
<span class="line"><span>[certs] etcd/peer serving cert is signed for DNS names [localhost master01] and IPs [192.168.10.21 127.0.0.1 ::1]</span></span>
<span class="line"><span>[certs] Generating &quot;etcd/healthcheck-client&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;apiserver-etcd-client&quot; certificate and key</span></span>
<span class="line"><span>[certs] Generating &quot;sa&quot; key and public key</span></span>
<span class="line"><span>[kubeconfig] Using kubeconfig folder &quot;/etc/kubernetes&quot;</span></span>
<span class="line"><span>[kubeconfig] Writing &quot;admin.conf&quot; kubeconfig file</span></span>
<span class="line"><span>[kubeconfig] Writing &quot;kubelet.conf&quot; kubeconfig file</span></span>
<span class="line"><span>[kubeconfig] Writing &quot;controller-manager.conf&quot; kubeconfig file</span></span>
<span class="line"><span>[kubeconfig] Writing &quot;scheduler.conf&quot; kubeconfig file</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span></span>
<span class="line"><span>[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;</span></span>
<span class="line"><span>[kubelet-start] Starting the kubelet</span></span>
<span class="line"><span>[control-plane] Using manifest folder &quot;/etc/kubernetes/manifests&quot;</span></span>
<span class="line"><span>[control-plane] Creating static Pod manifest for &quot;kube-apiserver&quot;</span></span>
<span class="line"><span>[control-plane] Creating static Pod manifest for &quot;kube-controller-manager&quot;</span></span>
<span class="line"><span>[control-plane] Creating static Pod manifest for &quot;kube-scheduler&quot;</span></span>
<span class="line"><span>[etcd] Creating static Pod manifest for local etcd in &quot;/etc/kubernetes/manifests&quot;</span></span>
<span class="line"><span>[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory &quot;/etc/kubernetes/manifests&quot;. This can take up to 4m0s</span></span>
<span class="line"><span>[kubelet-check] Initial timeout of 40s passed.</span></span>
<span class="line"><span>[apiclient] All control plane components are healthy after 84.003274 seconds</span></span>
<span class="line"><span>[upload-config] Storing the configuration used in ConfigMap &quot;kubeadm-config&quot; in the &quot;kube-system&quot; Namespace</span></span>
<span class="line"><span>[kubelet] Creating a ConfigMap &quot;kubelet-config-1.21&quot; in namespace kube-system with the configuration for the kubelets in the cluster</span></span>
<span class="line"><span>[upload-certs] Skipping phase. Please see --upload-certs</span></span>
<span class="line"><span>[mark-control-plane] Marking the node master01 as control-plane by adding the labels: [node-role.kubernetes.io/master(deprecated) node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]</span></span>
<span class="line"><span>[mark-control-plane] Marking the node master01 as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]</span></span>
<span class="line"><span>[bootstrap-token] Using token: znfrhi.y196yb8th9q6q54q</span></span>
<span class="line"><span>[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles</span></span>
<span class="line"><span>[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to get nodes</span></span>
<span class="line"><span>[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials</span></span>
<span class="line"><span>[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token</span></span>
<span class="line"><span>[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster</span></span>
<span class="line"><span>[bootstrap-token] Creating the &quot;cluster-info&quot; ConfigMap in the &quot;kube-public&quot; namespace</span></span>
<span class="line"><span>[kubelet-finalize] Updating &quot;/etc/kubernetes/kubelet.conf&quot; to point to a rotatable kubelet client certificate and key</span></span>
<span class="line"><span>[addons] Applied essential addon: CoreDNS</span></span>
<span class="line"><span>[addons] Applied essential addon: kube-proxy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Your Kubernetes control-plane has initialized successfully!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To start using your cluster, you need to run the following as a regular user:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mkdir -p $HOME/.kube</span></span>
<span class="line"><span>  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>  sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Alternatively, if you are the root user, you can run:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  export KUBECONFIG=/etc/kubernetes/admin.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You should now deploy a pod network to the cluster.</span></span>
<span class="line"><span>Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:</span></span>
<span class="line"><span>  https://kubernetes.io/docs/concepts/cluster-administration/addons/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then you can join any number of worker nodes by running the following on each as root:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubeadm join 192.168.10.21:6443 --token znfrhi.y196yb8th9q6q54q \\</span></span>
<span class="line"><span>        --discovery-token-ca-cert-hash sha256:e520c6014d9c3f835fb59090c0867e11c43e8fec1009467ea0c3510cdd484b8a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在输出信息中看到：<strong>Your Kubernetes control-plane has initialized successfully!</strong> 则表示集群初始化成功。</p></blockquote><h4 id="_6-2、另外再输出信息中提示如果需要使用集群-需要在master01宿主机本地创建一个隐藏的-kube文件夹-该文件主要用来存储安装软件-kubeadm、kubectl、kubelte-的一些配置文件。详细配置文件信息在提示中有输出。以下是输出提示信息" tabindex="-1"><a class="header-anchor" href="#_6-2、另外再输出信息中提示如果需要使用集群-需要在master01宿主机本地创建一个隐藏的-kube文件夹-该文件主要用来存储安装软件-kubeadm、kubectl、kubelte-的一些配置文件。详细配置文件信息在提示中有输出。以下是输出提示信息"><span>6.2、另外再输出信息中提示如果需要使用集群，需要在master01宿主机本地创建一个隐藏的.kube文件夹，该文件主要用来存储安装软件（kubeadm、kubectl、kubelte）的一些配置文件。详细配置文件信息在提示中有输出。以下是输出提示信息：</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>To start using your cluster, you need to run the following as a regular user:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mkdir -p $HOME/.kube</span></span>
<span class="line"><span>  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>  sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据提示信息，直接复制命令完成配置</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mkdir -p $HOME/.kube</span></span>
<span class="line"><span>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3、在提示中提到如果你是管理员-需要完成如下命令-提示信息如下" tabindex="-1"><a class="header-anchor" href="#_6-3、在提示中提到如果你是管理员-需要完成如下命令-提示信息如下"><span>6.3、在提示中提到如果你是管理员，需要完成如下命令，提示信息如下：</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Alternatively, if you are the root user, you can run:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  export KUBECONFIG=/etc/kubernetes/admin.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据提示信息，直接复制命令完成配置</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>export KUBECONFIG=/etc/kubernetes/admin.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_6-4、最后提示中提到需要为我们的集群配置网络-为pod节点分配ip-否则其他节点无法加入-详细信息提示如下" tabindex="-1"><a class="header-anchor" href="#_6-4、最后提示中提到需要为我们的集群配置网络-为pod节点分配ip-否则其他节点无法加入-详细信息提示如下"><span>6.4、最后提示中提到需要为我们的集群配置网络，为pod节点分配ip，否则其他节点无法加入，详细信息提示如下：</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>You should now deploy a pod network to the cluster.</span></span>
<span class="line"><span>Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:</span></span>
<span class="line"><span>  https://kubernetes.io/docs/concepts/cluster-administration/addons/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看一下节点中存在的主机</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 ~]# kubectl get nodes</span></span>
<span class="line"><span>NAME       STATUS     ROLES                  AGE   VERSION</span></span>
<span class="line"><span>master01   NotReady   control-plane,master   17m   v1.21.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##我们可以看到该主机状态NotReady，原因是没有网络</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看一下管理pod信息</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 ~]# kubectl get pods -n kube-system</span></span>
<span class="line"><span>NAME                               READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>coredns-558bd4d5db-c2zcw           0/1     Pending   0          18m</span></span>
<span class="line"><span>coredns-558bd4d5db-dfssw           0/1     Pending   0          18m</span></span>
<span class="line"><span>etcd-master01                      1/1     Running   0          18m</span></span>
<span class="line"><span>kube-apiserver-master01            1/1     Running   0          18m</span></span>
<span class="line"><span>kube-controller-manager-master01   1/1     Running   0          18m</span></span>
<span class="line"><span>kube-proxy-qh64c                   1/1     Running   0          18m</span></span>
<span class="line"><span>kube-scheduler-master01            1/1     Running   0          18m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##我们发现coredns运行不起来，原因是没有网络</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),t=[l];function r(p,c){return e(),n("div",null,t)}const u=s(i,[["render",r],["__file","02.html.vue"]]),b=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/02.html","title":"02-初始化","lang":"zh-CN","frontmatter":{"title":"02-初始化","order":2,"icon":"lightbulb","description":"1、集群软件版本说明 2、配置kubernetes源 以master01为例，所有主机都配置，kubernetes源为阿里云源，地址：https://developer.aliyun.com/mirror/kubernetes?spm=a2c6h.13651102.0.0.1e121b11vsbmJg 3、集群软件安装 以master01为例，其他主机...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/02.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"02-初始化"}],["meta",{"property":"og:description","content":"1、集群软件版本说明 2、配置kubernetes源 以master01为例，所有主机都配置，kubernetes源为阿里云源，地址：https://developer.aliyun.com/mirror/kubernetes?spm=a2c6h.13651102.0.0.1e121b11vsbmJg 3、集群软件安装 以master01为例，其他主机..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-初始化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":3,"title":"1、集群软件版本说明","slug":"_1、集群软件版本说明","link":"#_1、集群软件版本说明","children":[]},{"level":3,"title":"2、配置kubernetes源","slug":"_2、配置kubernetes源","link":"#_2、配置kubernetes源","children":[]},{"level":3,"title":"3、集群软件安装","slug":"_3、集群软件安装","link":"#_3、集群软件安装","children":[]},{"level":3,"title":"4、配置kubelet","slug":"_4、配置kubelet","link":"#_4、配置kubelet","children":[]},{"level":3,"title":"5、集群镜像准备","slug":"_5、集群镜像准备","link":"#_5、集群镜像准备","children":[]},{"level":3,"title":"6、在master01节点上配置集群初始化","slug":"_6、在master01节点上配置集群初始化","link":"#_6、在master01节点上配置集群初始化","children":[]}],"git":{},"readingTime":{"minutes":6.03,"words":1808},"filePathRelative":"note/kubernetes/install/kubeadm/1 master and 2 slaves/02.md","autoDesc":true}');export{u as comp,b as data};
