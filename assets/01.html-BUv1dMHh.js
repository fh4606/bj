import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-fmcy30Ms.js";const i="/assets/2024-01-18_100251_7822250.19618477323547356-YaLPLebj.png",l="/assets/2024-01-18_100447_8443210.19085411082207815-BYQJrZlP.png",p="/assets/2024-01-18_100630_8176320.023882901635084886-DefU2e33.png",d="/assets/2024-01-18_142756_3843980.9232590886755949-Dh_lFSbG.png",c="/assets/2024-01-18_144246_4851460.36406800115353777-0yZ9CUiV.png",r={},t=e(`<p><a style="color:blue;font-size:30px;">部署3主3从的kubernetes1.21.0高可用集群环境</a></p><p>参考地址：https://www.cnblogs.com/superlinux/p/14676959.html</p><h2 id="_1、主机操作系统说明" tabindex="-1"><a class="header-anchor" href="#_1、主机操作系统说明"><span>1、主机操作系统说明</span></a></h2><table><thead><tr><th>序号</th><th>操作系统及版本</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>centos7.6</td><td></td></tr></tbody></table><h2 id="_2、主机硬件配置说明" tabindex="-1"><a class="header-anchor" href="#_2、主机硬件配置说明"><span>2、主机硬件配置说明</span></a></h2><table><thead><tr><th>需求</th><th>CPU</th><th>内存</th><th>硬盘</th><th>角色</th><th>主机名</th><th>ip地址</th><th>备注</th></tr></thead><tbody><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>master</td><td>k8s-master01</td><td>192.168.10.21</td><td></td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>master</td><td>k8s-master02</td><td>192.168.10.22</td><td></td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>master</td><td>k8s-master03</td><td>192.168.10.23</td><td></td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>worker（node）</td><td>k8s-worker01</td><td>192.168.10.24</td><td></td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>worker（node）</td><td>k8s-worker02</td><td>192.168.10.25</td><td></td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>worker（node）</td><td>k8s-worker03</td><td>192.168.10.26</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>k8s-master-lb</td><td>192.168.10.100</td><td></td></tr></tbody></table><table><thead><tr><th>序号</th><th>主机名</th><th>功能</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>master01</td><td>haproxy、keepalived</td><td>keepalived主节点</td></tr><tr><td>2</td><td>master02</td><td>haproxy、keepalived</td><td>keepalived从节点</td></tr><tr><td>3</td><td>master03</td><td>haproxy、keepalived</td><td>keepalived从节点</td></tr></tbody></table><p><strong>花里胡哨的美化配置</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#命令行优化：</span></span>
<span class="line"><span>echo &quot;export PS1=&#39;\\[\\033[01;31m\\]\\u\\[\\033[00m\\]@\\[\\033[01;32m\\]\\h\\[\\033[00m\\][\\[\\033[01;33m\\]\\t\\[\\033[00m\\]]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]$ &#39;&quot; &gt;&gt;/etc/profile</span></span>
<span class="line"><span>source /etc/profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#历史记录优化： </span></span>
<span class="line"><span>export HISTTIMEFORMAT=&#39;%F %T &#39; </span></span>
<span class="line"><span>echo &quot;export HISTTIMEFORMAT=&#39;%F %T &#39;&quot; &gt;&gt;/etc/profile </span></span>
<span class="line"><span>source /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、主机配置" tabindex="-1"><a class="header-anchor" href="#_3、主机配置"><span>3、主机配置</span></a></h2><h3 id="_3-1、配置yum源-所有主机都配置" tabindex="-1"><a class="header-anchor" href="#_3-1、配置yum源-所有主机都配置"><span>3.1、配置yum源，所有主机都配置</span></a></h3><blockquote><p>采用阿里云源</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rm -rf  /etc/yum.repos.d/*</span></span>
<span class="line"><span>cd /etc/yum.repos.d/</span></span>
<span class="line"><span>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span>yum install -y yum-utils device-mapper-persistent-data lvm2</span></span>
<span class="line"><span>yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt; /etc/yum.repos.d/kubernetes.repo</span></span>
<span class="line"><span>[kubernetes]</span></span>
<span class="line"><span>name=Kubernetes</span></span>
<span class="line"><span>baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=1</span></span>
<span class="line"><span>repo_gpgcheck=1</span></span>
<span class="line"><span>gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sed -i -e &#39;/mirrors.cloud.aliyuncs.com/d&#39; -e &#39;/mirrors.aliyuncs.com/d&#39; /etc/yum.repos.d/CentOS-Base.repo</span></span>
<span class="line"><span>yum clean all</span></span>
<span class="line"><span>yum install -y epel-release</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装必备工具：</span></span>
<span class="line"><span>#必备工具安装</span></span>
<span class="line"><span>yum install wget jq psmisc vim net-tools telnet yum-utils device-mapper-persistent-data lvm2 git -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下载安装所有的源码文件，后面需要用到</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /root/ </span></span>
<span class="line"><span>git clone https://github.com/dotbalo/k8s-ha-install.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果无法下载请使用下面的重试：</span></span>
<span class="line"><span>git clone https://gitee.com/dukuan/k8s-ha-install.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、修改主机名-配置hosts本地解析" tabindex="-1"><a class="header-anchor" href="#_3-2、修改主机名-配置hosts本地解析"><span>3.2、修改主机名，配置hosts本地解析</span></a></h3><blockquote><p>master01为例，其他主机均配置，注意主机名</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>hostnamectl set-hostname k8s-master01</span></span>
<span class="line"><span>bash</span></span>
<span class="line"><span>cat &gt;&gt; /etc/hosts &lt;&lt;EOF</span></span>
<span class="line"><span>192.168.3.31 k8s-master01</span></span>
<span class="line"><span>192.168.3.32 k8s-master02</span></span>
<span class="line"><span>192.168.3.33 k8s-master03</span></span>
<span class="line"><span>192.168.3.34 k8s-worker01</span></span>
<span class="line"><span>192.168.3.35 k8s-worker02</span></span>
<span class="line"><span>192.168.3.36 k8s-worker03</span></span>
<span class="line"><span>192.168.3.100 k8s-master-lb</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>cat /etc/hosts</span></span>
<span class="line"><span>127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4</span></span>
<span class="line"><span>::1         localhost localhost.localdomain localhost6 localhost6.localdomain6</span></span>
<span class="line"><span>192.168.3.31 k8s-master01</span></span>
<span class="line"><span>192.168.3.32 k8s-master02</span></span>
<span class="line"><span>192.168.3.33 k8s-master03</span></span>
<span class="line"><span>192.168.3.34 k8s-worker01</span></span>
<span class="line"><span>192.168.3.35 k8s-worker02</span></span>
<span class="line"><span>192.168.3.36 k8s-worker03</span></span>
<span class="line"><span>192.168.3.100 k8s-master-lb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>完成以后在master01上测试连通性</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 ~]# ping k8s-worker01</span></span>
<span class="line"><span>[root@master01 ~]# ping k8s-worker02</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#以下以master01结果为例</span></span>
<span class="line"><span>[root@master01 ~]# ping worker01 </span></span>
<span class="line"><span>PING worker01 (192.168.10.22) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from worker01 (192.168.10.22): icmp_seq=1 ttl=64 time=0.652 ms</span></span>
<span class="line"><span>64 bytes from worker01 (192.168.10.22): icmp_seq=2 ttl=64 time=0.430 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- worker01 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 received, 0% packet loss, time 1065ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.430/0.541/0.652/0.111 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@master01 ~]# ping worker02</span></span>
<span class="line"><span>PING worker02 (192.168.10.23) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from worker02 (192.168.10.23): icmp_seq=1 ttl=64 time=0.774 ms</span></span>
<span class="line"><span>64 bytes from worker02 (192.168.10.23): icmp_seq=2 ttl=64 time=0.444 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- worker02 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 received, 0% packet loss, time 1019ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.444/0.609/0.774/0.165 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、所有节点优化" tabindex="-1"><a class="header-anchor" href="#_3-3、所有节点优化"><span>3.3、所有节点优化</span></a></h3><blockquote><p>master01为例，其他主机均配置，配置完成后 <em><strong>重启主机</strong></em></p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#所有节点关闭防火墙、selinux、dnsmasq、swap。服务器配置如下：</span></span>
<span class="line"><span>systemctl disable --now firewalld </span></span>
<span class="line"><span>systemctl disable --now dnsmasq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setenforce 0</span></span>
<span class="line"><span>sed -i &#39;s#SELINUX=enforcing#SELINUX=disabled#g&#39; /etc/sysconfig/selinux</span></span>
<span class="line"><span>sed -i &#39;s#SELINUX=enforcing#SELINUX=disabled#g&#39; /etc/selinux/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#关闭swap分区</span></span>
<span class="line"><span>swapoff -a &amp;&amp; sysctl -w vm.swappiness=0</span></span>
<span class="line"><span>sed -ri &#39;/^[^#]*swap/s@^@#@&#39; /etc/fstab</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装ntpdate</span></span>
<span class="line"><span>rpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#添加计划任务</span></span>
<span class="line"><span>yum install -y ntpdate</span></span>
<span class="line"><span>echo &#39;*/5 * * * * ntpdate cn.pool.ntp.org&#39; &gt;&gt;/var/spool/cron/root</span></span>
<span class="line"><span>systemctl restart crond</span></span>
<span class="line"><span>ntpdate time2.aliyun.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#所有节点同步时间。时间同步配置如下：</span></span>
<span class="line"><span>ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span>echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone</span></span>
<span class="line"><span>ntpdate time2.aliyun.com</span></span>
<span class="line"><span># 加入到crontab</span></span>
<span class="line"><span>*/5 * * * * /usr/sbin/ntpdate time2.aliyun.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#limit优化</span></span>
<span class="line"><span>ulimit -SHn 65535</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt;&gt; /etc/security/limits.conf</span></span>
<span class="line"><span>* soft nofile 655360</span></span>
<span class="line"><span>* hard nofile 131072</span></span>
<span class="line"><span>* soft nproc 655350</span></span>
<span class="line"><span>* hard nproc 655350</span></span>
<span class="line"><span>* soft memlock unlimited</span></span>
<span class="line"><span>* hard memlock unlimited</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、配置免密-中控机操作-master01" tabindex="-1"><a class="header-anchor" href="#_3-4、配置免密-中控机操作-master01"><span>3.4、配置免密[中控机操作:master01]</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#Master01节点免密钥登录其他节点，安装过程中生成配置文件和证书均在Master01上操作，集群管理也在Master01上操作，阿里云或者AWS上需要单独一台kubectl服务器。密钥配置如下：</span></span>
<span class="line"><span>cd /root</span></span>
<span class="line"><span>ssh-keygen -t rsa</span></span>
<span class="line"><span>for i in k8s-master01 k8s-master02 k8s-master03 k8s-worker01 k8s-worker02 k8s-worker03;do ssh-copy-id -i .ssh/id_rsa.pub $i;done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5、升级内核" tabindex="-1"><a class="header-anchor" href="#_3-5、升级内核"><span>3.5、升级内核</span></a></h3><blockquote><p>原文：https://www.xxjsfb.cn/doc/275/</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#启用 ELRepo 只需要执行命令：</span></span>
<span class="line"><span>yum -y install elrepo-release</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 列出可用的内核相关包：</span></span>
<span class="line"><span>yum --disablerepo=&quot;*&quot; --enablerepo=&quot;elrepo-kernel&quot; list available</span></span>
<span class="line"><span>yum --disablerepo=&quot;*&quot; --enablerepo=&quot;elrepo-kernel&quot; list available --showduplicates #查看所有版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据上述查询结果，安装内核相关包</span></span>
<span class="line"><span># 安装新内核</span></span>
<span class="line"><span>yum --disablerepo=\\* --enablerepo=elrepo-kernel install -y kernel-ml.x86_64</span></span>
<span class="line"><span>#kernel-core、kernel-modules 与 kernel 依赖自动更新</span></span>
<span class="line"><span># 安装新内核相关软件</span></span>
<span class="line"><span>yum --disablerepo=\\* --enablerepo=elrepo-kernel install -y kernel-ml-devel kernel-ml-tools kernel-ml-tools-libs kernel-ml-tools-libs-devel kernel-ml-headers --skip-broken</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看系统安装的全部内核：</span></span>
<span class="line"><span>root@k8s-master01[18:08:45]:~$ grubby --info=ALL</span></span>
<span class="line"><span>index=0</span></span>
<span class="line"><span>kernel=/boot/vmlinuz-6.6.11-1.el7.elrepo.x86_64</span></span>
<span class="line"><span>args=&quot;ro crashkernel=auto rd.lvm.lv=centos/root rhgb quiet LANG=en_US.UTF-8&quot;</span></span>
<span class="line"><span>root=/dev/mapper/centos-root</span></span>
<span class="line"><span>initrd=/boot/initramfs-6.6.11-1.el7.elrepo.x86_64.img</span></span>
<span class="line"><span>title=CentOS Linux (6.6.11-1.el7.elrepo.x86_64) 7 (Core)</span></span>
<span class="line"><span>index=1</span></span>
<span class="line"><span>kernel=/boot/vmlinuz-3.10.0-957.el7.x86_64</span></span>
<span class="line"><span>args=&quot;ro crashkernel=auto rd.lvm.lv=centos/root rhgb quiet LANG=en_US.UTF-8&quot;</span></span>
<span class="line"><span>root=/dev/mapper/centos-root</span></span>
<span class="line"><span>initrd=/boot/initramfs-3.10.0-957.el7.x86_64.img</span></span>
<span class="line"><span>title=CentOS Linux (3.10.0-957.el7.x86_64) 7 (Core)</span></span>
<span class="line"><span>index=2</span></span>
<span class="line"><span>kernel=/boot/vmlinuz-0-rescue-6b99fdbc99164b2d8a41e9891d315802</span></span>
<span class="line"><span>args=&quot;ro crashkernel=auto rd.lvm.lv=centos/root rhgb quiet&quot;</span></span>
<span class="line"><span>root=/dev/mapper/centos-root</span></span>
<span class="line"><span>initrd=/boot/initramfs-0-rescue-6b99fdbc99164b2d8a41e9891d315802.img</span></span>
<span class="line"><span>title=CentOS Linux (0-rescue-6b99fdbc99164b2d8a41e9891d315802) 7 (Core)</span></span>
<span class="line"><span>index=3</span></span>
<span class="line"><span>non linux entry</span></span>
<span class="line"><span>You have new mail in /var/spool/mail/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用路径来指定内核，可以使用 --set-default=kernel-path</span></span>
<span class="line"><span>root@k8s-master01[18:18:16]:~$grubby --set-default=/boot/vmlinuz-6.6.11-1.el7.elrepo.x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@k8s-master01[18:18:16]:~$ grubby --default-kernel</span></span>
<span class="line"><span>/boot/vmlinuz-6.6.11-1.el7.elrepo.x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启</span></span>
<span class="line"><span>reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6、所有节点安装ipvsadm" tabindex="-1"><a class="header-anchor" href="#_3-6、所有节点安装ipvsadm"><span>3.6、所有节点安装ipvsadm</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install ipvsadm ipset sysstat conntrack libseccomp -y </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#所有节点配置ipvs模块，在内核4.19+版本nf_conntrack_ipv4已经改为nf_conntrack， 4.18以下使用nf_conntrack_ipv4即可： </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>modprobe -- ip_vs </span></span>
<span class="line"><span>modprobe -- ip_vs_rr </span></span>
<span class="line"><span>modprobe -- ip_vs_wrr </span></span>
<span class="line"><span>modprobe -- ip_vs_sh </span></span>
<span class="line"><span>modprobe -- nf_conntrack </span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#创建 /etc/modules-load.d/ipvs.conf 并加入以下内容： </span></span>
<span class="line"><span>cat &gt;/etc/modules-load.d/ipvs.conf &lt;&lt;EOF </span></span>
<span class="line"><span>ip_vs </span></span>
<span class="line"><span>ip_vs_lc </span></span>
<span class="line"><span>ip_vs_wlc </span></span>
<span class="line"><span>ip_vs_rr </span></span>
<span class="line"><span>ip_vs_wrr </span></span>
<span class="line"><span>ip_vs_lblc </span></span>
<span class="line"><span>ip_vs_lblcr </span></span>
<span class="line"><span>ip_vs_dh </span></span>
<span class="line"><span>ip_vs_sh </span></span>
<span class="line"><span>ip_vs_fo </span></span>
<span class="line"><span>ip_vs_nq </span></span>
<span class="line"><span>ip_vs_sed </span></span>
<span class="line"><span>ip_vs_ftp </span></span>
<span class="line"><span>ip_vs_sh </span></span>
<span class="line"><span>nf_conntrack </span></span>
<span class="line"><span>ip_tables </span></span>
<span class="line"><span>ip_set </span></span>
<span class="line"><span>xt_set </span></span>
<span class="line"><span>ipt_set </span></span>
<span class="line"><span>ipt_rpfilter </span></span>
<span class="line"><span>ipt_REJECT </span></span>
<span class="line"><span>ipip </span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置为开机启动</span></span>
<span class="line"><span>systemctl enable --now systemd-modules-load.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7、k8s内核优化" tabindex="-1"><a class="header-anchor" href="#_3-7、k8s内核优化"><span>3.7、k8s内核优化</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#开启一些k8s集群中必须的内核参数，所有节点配置k8s内核：</span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt; /etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>fs.may_detach_mounts = 1</span></span>
<span class="line"><span>vm.overcommit_memory=1</span></span>
<span class="line"><span>vm.panic_on_oom=0</span></span>
<span class="line"><span>fs.inotify.max_user_watches=89100</span></span>
<span class="line"><span>fs.file-max=52706963</span></span>
<span class="line"><span>fs.nr_open=52706963</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_max=2310720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_time = 600</span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_probes = 3</span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_intvl =15</span></span>
<span class="line"><span>net.ipv4.tcp_max_tw_buckets = 36000</span></span>
<span class="line"><span>net.ipv4.tcp_tw_reuse = 1</span></span>
<span class="line"><span>net.ipv4.tcp_max_orphans = 327680</span></span>
<span class="line"><span>net.ipv4.tcp_orphan_retries = 3</span></span>
<span class="line"><span>net.ipv4.tcp_syncookies = 1</span></span>
<span class="line"><span>net.ipv4.tcp_max_syn_backlog = 16384</span></span>
<span class="line"><span>net.ipv4.ip_conntrack_max = 65536</span></span>
<span class="line"><span>net.ipv4.tcp_max_syn_backlog = 16384</span></span>
<span class="line"><span>net.ipv4.tcp_timestamps = 0</span></span>
<span class="line"><span>net.core.somaxconn = 16384</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sysctl --system</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#所有节点配置完内核后，重启服务器，保证重启后内核依旧加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reboot</span></span>
<span class="line"><span>lsmod | grep --color=auto -e ip_vs -e nf_conntrack</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启后结果如下代表正常：</span></span>
<span class="line"><span>root@k8s-master01[17:19:15]:~$ lsmod | grep --color=auto -e ip_vs -e nf_conntrack </span></span>
<span class="line"><span>ip_vs_ftp              16384  0  </span></span>
<span class="line"><span>nf_nat                 32768  1 ip_vs_ftp </span></span>
<span class="line"><span>ip_vs_sed              16384  0  </span></span>
<span class="line"><span>ip_vs_nq               16384  0  </span></span>
<span class="line"><span>ip_vs_fo               16384  0  </span></span>
<span class="line"><span>ip_vs_sh               16384  0  </span></span>
<span class="line"><span>ip_vs_dh               16384  0  </span></span>
<span class="line"><span>ip_vs_lblcr            16384  0  </span></span>
<span class="line"><span>ip_vs_lblc             16384  0  </span></span>
<span class="line"><span>ip_vs_wrr              16384  0  </span></span>
<span class="line"><span>ip_vs_rr               16384  0  </span></span>
<span class="line"><span>ip_vs_wlc              16384  0  </span></span>
<span class="line"><span>ip_vs_lc               16384  0  </span></span>
<span class="line"><span>ip_vs                 151552  24 ip_vs_wlc,ip_vs_rr,ip_vs_dh,ip_vs_lblcr,ip_vs_sh,ip_vs_fo,ip_vs_nq,ip_vs_lblc,ip_vs_wrr,ip_vs_lc,ip_vs_sed,ip_vs_ftp </span></span>
<span class="line"><span>nf_conntrack          143360  2 nf_nat,ip_vs </span></span>
<span class="line"><span>nf_defrag_ipv6         20480  1 nf_conntrack </span></span>
<span class="line"><span>nf_defrag_ipv4         16384  1 nf_conntrack </span></span>
<span class="line"><span>libcrc32c              16384  4 nf_conntrack,nf_nat,xfs,ip_vs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8、基本组件安装" tabindex="-1"><a class="header-anchor" href="#_3-8、基本组件安装"><span>3.8、基本组件安装</span></a></h3><h4 id="_3-8-1、所有节点安装-docker-ce-20-10" tabindex="-1"><a class="header-anchor" href="#_3-8-1、所有节点安装-docker-ce-20-10"><span>3.8.1、所有节点安装 docker-ce 20.10</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum install -y docker-ce-20.10.6-* docker-ce-cli-20.10.6-*.x86_64</span></span>
<span class="line"><span>rm -f /etc/docker/* </span></span>
<span class="line"><span>sudo mkdir -p /etc/docker </span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39; </span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://ajvcw8qn.mirror.aliyuncs.com&quot;],</span></span>
<span class="line"><span>  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;] </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload </span></span>
<span class="line"><span>sudo systemctl restart docker </span></span>
<span class="line"><span>systemctl enable --now  docker.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-2、所有机器安装k8s组件kubeadm" tabindex="-1"><a class="header-anchor" href="#_3-8-2、所有机器安装k8s组件kubeadm"><span>3.8.2、所有机器安装k8s组件kubeadm</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yum list kubeadm.x86_64 --showduplicates | sort -r</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#所有节点安装最新版本kubeadm： </span></span>
<span class="line"><span>yum install kubeadm-1.21* kubelet-1.21* kubectl-1.21* -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#默认配置的pause镜像使用gcr.io仓库，国内可能无法访问，所以这里配置Kubelet使用阿里云的pause镜像</span></span>
<span class="line"><span>cat &gt;/etc/sysconfig/kubelet&lt;&lt;EOF</span></span>
<span class="line"><span>KUBELET_EXTRA_ARGS=&quot;--cgroup-driver=systemd --pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google_containers/pause-amd64:3.2&quot;</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置开机启动</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl enable --now kubelet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-3、安装高可用组件-master相关服务器执行" tabindex="-1"><a class="header-anchor" href="#_3-8-3、安装高可用组件-master相关服务器执行"><span>3.8.3、安装高可用组件[master相关服务器执行]</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#所有Master节点通过yum安装HAProxy和KeepAlived：</span></span>
<span class="line"><span>root@k8s-master01[17:44:47]:~$  yum install keepalived haproxy -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#配置HAProxy：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#所有Master节点配置HAProxy（详细配置参考HAProxy文档，所有Master节点的HAProxy配置相同）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir /etc/haproxy</span></span>
<span class="line"><span>cat &gt;/etc/haproxy/haproxy.cfg&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>global</span></span>
<span class="line"><span> maxconn 2000</span></span>
<span class="line"><span> ulimit-n 16384</span></span>
<span class="line"><span> log 127.0.0.1 local0 err</span></span>
<span class="line"><span> stats timeout 30s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>defaults</span></span>
<span class="line"><span> log global</span></span>
<span class="line"><span> mode http</span></span>
<span class="line"><span> option httplog</span></span>
<span class="line"><span> timeout connect 5000</span></span>
<span class="line"><span> timeout client 50000</span></span>
<span class="line"><span> timeout server 50000</span></span>
<span class="line"><span> timeout http-request 15s</span></span>
<span class="line"><span> timeout http-keep-alive 15s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>frontend monitor-in</span></span>
<span class="line"><span> bind *:33305</span></span>
<span class="line"><span> mode http</span></span>
<span class="line"><span> option httplog</span></span>
<span class="line"><span> monitor-uri /monitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>frontend k8s-master</span></span>
<span class="line"><span> bind 0.0.0.0:16443</span></span>
<span class="line"><span> bind 127.0.0.1:16443</span></span>
<span class="line"><span> mode tcp</span></span>
<span class="line"><span> option tcplog</span></span>
<span class="line"><span> tcp-request inspect-delay 5s</span></span>
<span class="line"><span> default_backend k8s-master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>backend k8s-master</span></span>
<span class="line"><span> mode tcp</span></span>
<span class="line"><span> option tcplog</span></span>
<span class="line"><span> option tcp-check</span></span>
<span class="line"><span> balance roundrobin</span></span>
<span class="line"><span> default-server inter 10s downinter 5s rise 2 fall 2 slowstart 60s maxconn 250 maxqueue 256 weight 100</span></span>
<span class="line"><span> server k8s-master01  192.168.3.31:6443 check</span></span>
<span class="line"><span> server k8s-master02  192.168.3.32:6443 check</span></span>
<span class="line"><span> server k8s-master03  192.168.3.33:6443 check</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#所有Master节点配置KeepAlived，配置不一样，注意区分</span></span>
<span class="line"><span>#[root@k8s-master01 pki]# vim /etc/keepalived/keepalived.conf ，注意每个节点的IP和网卡（interface参数）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#注意修改配置，下面IP替换为master的IP地址：</span></span>
<span class="line"><span>server k8s-master01  192.168.3.31:6443 check</span></span>
<span class="line"><span>server k8s-master02  192.168.3.32:6443 check</span></span>
<span class="line"><span>server k8s-master03  192.168.3.33:6443 check</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#配置keepalived</span></span>
<span class="line"><span>#所有Master节点配置KeepAlived，配置不一样，注意区分 </span></span>
<span class="line"><span>#每台服务器 优先级必须不同 priority 100 其他机器设置为 99 98 </span></span>
<span class="line"><span>#master01 配置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@k8s-master01 pki]# mkdir -p /etc/keepalived</span></span>
<span class="line"><span>[root@k8s-master01 pki]# cat &gt;/etc/keepalived/keepalived.conf&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>! Configuration File for keepalived</span></span>
<span class="line"><span>global_defs {</span></span>
<span class="line"><span>   router_id LVS_DEVEL</span></span>
<span class="line"><span>script_user root</span></span>
<span class="line"><span>   enable_script_security</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_script chk_apiserver {</span></span>
<span class="line"><span>   script &quot;/etc/keepalived/check_apiserver.sh&quot;</span></span>
<span class="line"><span>   interval 5</span></span>
<span class="line"><span>   weight -5</span></span>
<span class="line"><span>   fall 2 </span></span>
<span class="line"><span>rise 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_instance VI_1 {</span></span>
<span class="line"><span>   state MASTER</span></span>
<span class="line"><span>   interface eth0</span></span>
<span class="line"><span>   mcast_src_ip 192.168.3.31</span></span>
<span class="line"><span>   virtual_router_id 51</span></span>
<span class="line"><span>   priority 100</span></span>
<span class="line"><span>   advert_int 2</span></span>
<span class="line"><span>   authentication {</span></span>
<span class="line"><span>       auth_type PASS</span></span>
<span class="line"><span>       auth_pass K8SHA_KA_AUTH</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   virtual_ipaddress {</span></span>
<span class="line"><span>       192.168.3.100</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   track_script {</span></span>
<span class="line"><span>      chk_apiserver</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Master02 配置：</span></span>
<span class="line"><span>[root@k8s-master02 pki]# cat &gt;/etc/keepalived/keepalived.conf&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>! Configuration File for keepalived</span></span>
<span class="line"><span>global_defs {</span></span>
<span class="line"><span>   router_id LVS_DEVEL</span></span>
<span class="line"><span>script_user root</span></span>
<span class="line"><span>   enable_script_security</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_script chk_apiserver {</span></span>
<span class="line"><span>   script &quot;/etc/keepalived/check_apiserver.sh&quot;</span></span>
<span class="line"><span>  interval 5</span></span>
<span class="line"><span>   weight -5</span></span>
<span class="line"><span>   fall 2 </span></span>
<span class="line"><span>rise 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_instance VI_1 {</span></span>
<span class="line"><span>   state BACKUP</span></span>
<span class="line"><span>   interface eth0</span></span>
<span class="line"><span>   mcast_src_ip 192.168.3.32</span></span>
<span class="line"><span>   virtual_router_id 51</span></span>
<span class="line"><span>   priority 99</span></span>
<span class="line"><span>   advert_int 2</span></span>
<span class="line"><span>   authentication {</span></span>
<span class="line"><span>       auth_type PASS</span></span>
<span class="line"><span>       auth_pass K8SHA_KA_AUTH</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   virtual_ipaddress {</span></span>
<span class="line"><span>       192.168.3.100</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   track_script {</span></span>
<span class="line"><span>      chk_apiserver</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Master03 配置：</span></span>
<span class="line"><span>[root@k8s-master03 pki]# cat &gt;/etc/keepalived/keepalived.conf&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>! Configuration File for keepalived</span></span>
<span class="line"><span>global_defs {</span></span>
<span class="line"><span>   router_id LVS_DEVEL</span></span>
<span class="line"><span>script_user root</span></span>
<span class="line"><span>   enable_script_security</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_script chk_apiserver {</span></span>
<span class="line"><span>   script &quot;/etc/keepalived/check_apiserver.sh&quot;</span></span>
<span class="line"><span> interval 5</span></span>
<span class="line"><span>   weight -5</span></span>
<span class="line"><span>   fall 2 </span></span>
<span class="line"><span>rise 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_instance VI_1 {</span></span>
<span class="line"><span>   state BACKUP</span></span>
<span class="line"><span>   interface eth0</span></span>
<span class="line"><span>   mcast_src_ip 192.168.3.33</span></span>
<span class="line"><span>   virtual_router_id 51</span></span>
<span class="line"><span>   priority 98</span></span>
<span class="line"><span>   advert_int 2</span></span>
<span class="line"><span>   authentication {</span></span>
<span class="line"><span>       auth_type PASS</span></span>
<span class="line"><span>       auth_pass K8SHA_KA_AUTH</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   virtual_ipaddress {</span></span>
<span class="line"><span>       192.168.3.100</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#快捷办法[变量获取本机IP]：</span></span>
<span class="line"><span>host=$(hostname -i)</span></span>
<span class="line"><span>cat &gt;/etc/keepalived/keepalived.conf&lt;&lt;EOF </span></span>
<span class="line"><span>! Configuration File for keepalived </span></span>
<span class="line"><span>global_defs { </span></span>
<span class="line"><span>   router_id LVS_DEVEL </span></span>
<span class="line"><span>script_user root </span></span>
<span class="line"><span>   enable_script_security </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_script chk_apiserver { </span></span>
<span class="line"><span>   script &quot;/etc/keepalived/check_apiserver.sh&quot; </span></span>
<span class="line"><span>   interval 5 </span></span>
<span class="line"><span>   weight -5 </span></span>
<span class="line"><span>   fall 2  </span></span>
<span class="line"><span>rise 1 </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vrrp_instance VI_1 { </span></span>
<span class="line"><span>   state MASTER </span></span>
<span class="line"><span>   interface eth0 </span></span>
<span class="line"><span>   mcast_src_ip $(hostname -i) </span></span>
<span class="line"><span>   virtual_router_id 51 </span></span>
<span class="line"><span>   priority 101 </span></span>
<span class="line"><span>   advert_int 2 </span></span>
<span class="line"><span>   authentication { </span></span>
<span class="line"><span>       auth_type PASS </span></span>
<span class="line"><span>       auth_pass K8SHA_KA_AUTH </span></span>
<span class="line"><span>   } </span></span>
<span class="line"><span>   virtual_ipaddress { </span></span>
<span class="line"><span>       192.168.3.100 </span></span>
<span class="line"><span>   } </span></span>
<span class="line"><span>   track_script { </span></span>
<span class="line"><span>      chk_apiserver </span></span>
<span class="line"><span>   } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-4、健康检查配置-所有master服务器添加健康检查脚本" tabindex="-1"><a class="header-anchor" href="#_3-8-4、健康检查配置-所有master服务器添加健康检查脚本"><span>3.8.4、健康检查配置[所有master服务器添加健康检查脚本]</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/keepalived/check_apiserver.sh &lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>err=0</span></span>
<span class="line"><span>for k in $(seq 1 3)</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>   check_code=$(pgrep haproxy)</span></span>
<span class="line"><span>   if [[ $check_code == &quot;&quot; ]]; then</span></span>
<span class="line"><span>       err=$(expr $err + 1)</span></span>
<span class="line"><span>       sleep 1</span></span>
<span class="line"><span>       continue</span></span>
<span class="line"><span>   else</span></span>
<span class="line"><span>       err=0</span></span>
<span class="line"><span>       break</span></span>
<span class="line"><span>   fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $err != &quot;0&quot; ]]; then</span></span>
<span class="line"><span>   echo &quot;systemctl stop keepalived&quot;</span></span>
<span class="line"><span>   /usr/bin/systemctl stop keepalived</span></span>
<span class="line"><span>   exit 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chmod +x /etc/keepalived/check_apiserver.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-5、启动haproxy和keepalived-每台master启用" tabindex="-1"><a class="header-anchor" href="#_3-8-5、启动haproxy和keepalived-每台master启用"><span>3.8.5、启动haproxy和keepalived[每台master启用]</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl enable --now haproxy</span></span>
<span class="line"><span>systemctl enable --now keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-6、测试haproxy与keepalived是否正常" tabindex="-1"><a class="header-anchor" href="#_3-8-6、测试haproxy与keepalived是否正常"><span>3.8.6、测试haproxy与keepalived是否正常</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>重要：如果安装了keepalived和haproxy，需要测试keepalived是否是正常的</span></span>
<span class="line"><span>所以这里需要测试VIP是否通</span></span>
<span class="line"><span>root@k8s-master01[18:19:31]:~$ ping 192.168.3.100 -c 4</span></span>
<span class="line"><span>PING 192.168.3.100 (192.168.3.100) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=1 ttl=64 time=0.421 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=2 ttl=64 time=0.289 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=3 ttl=64 time=0.321 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=4 ttl=64 time=0.232 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 192.168.3.100 ping statistics ---</span></span>
<span class="line"><span>4 packets transmitted, 4 received, 0% packet loss, time 3080ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.232/0.315/0.421/0.071 ms</span></span>
<span class="line"><span>You have new mail in /var/spool/mail/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@k8s-master02[17:52:24]:~$ ping 192.168.3.100 -c 4</span></span>
<span class="line"><span>PING 192.168.3.100 (192.168.3.100) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=1 ttl=64 time=0.458 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=2 ttl=64 time=0.344 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=3 ttl=64 time=0.253 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=4 ttl=64 time=0.373 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 192.168.3.100 ping statistics ---</span></span>
<span class="line"><span>4 packets transmitted, 4 received, 0% packet loss, time 3093ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.253/0.357/0.458/0.073 ms</span></span>
<span class="line"><span>You have new mail in /var/spool/mail/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@k8s-master03[17:52:24]:~$ ping 192.168.3.100 -c 4</span></span>
<span class="line"><span>PING 192.168.3.100 (192.168.3.100) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=1 ttl=64 time=0.079 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=2 ttl=64 time=0.054 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=3 ttl=64 time=0.058 ms</span></span>
<span class="line"><span>64 bytes from 192.168.3.100: icmp_seq=4 ttl=64 time=0.055 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 192.168.3.100 ping statistics ---</span></span>
<span class="line"><span>4 packets transmitted, 4 received, 0% packet loss, time 3094ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.054/0.061/0.079/0.012 ms</span></span>
<span class="line"><span>You have new mail in /var/spool/mail/root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意： 如果ping不通且telnet没有出现 ] ，则认为VIP不可以，不可在继续往下执行，需要排查keepalived的问题，比如防火墙和selinux，haproxy和keepalived的状态，监听端口等</span></span>
<span class="line"><span>所有节点查看防火墙状态必须为disable和inactive：systemctl status firewalld</span></span>
<span class="line"><span>所有节点查看selinux状态，必须为disable：getenforce</span></span>
<span class="line"><span>master节点查看haproxy和keepalived状态：systemctl status keepalived haproxy</span></span>
<span class="line"><span>master节点查看监听端口：netstat -lntp</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>排查思路：</span></span>
<span class="line"><span>keepalived的问题，比如防火墙和selinux，haproxy和keepalived的状态，监听端口等</span></span>
<span class="line"><span>所有节点查看防火墙状态必须为disable和inactive：systemctl status firewalld</span></span>
<span class="line"><span>所有节点查看selinux状态，必须为disable：getenforce</span></span>
<span class="line"><span>master节点查看haproxy和keepalived状态：systemctl status keepalived haproxy</span></span>
<span class="line"><span>master节点查看监听端口：netstat -lntp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、kubernetes集群初始化" tabindex="-1"><a class="header-anchor" href="#_4、kubernetes集群初始化"><span>4、kubernetes集群初始化</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Master01节点创建 kubeadm-config.yaml 配置文件如下：</span></span>
<span class="line"><span>Master01：（# 注意，如果不是高可用集群，192.168.3.100:16443改为master01的地址，16443改为apiserver的端口，默认是6443，注意更改v1.18.5自己服务器kubeadm的版本：kubeadm version）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看办法：</span></span>
<span class="line"><span>kubectl version</span></span>
<span class="line"><span>root@k8s-master01[18:25:48]:~$ kubectl version </span></span>
<span class="line"><span>Client Version: version.Info{Major:&quot;1&quot;, Minor:&quot;21&quot;, GitVersion:&quot;v1.21.0&quot;, GitCommit:&quot;cb303e613a121a29364f75cc67d3d580833a7479&quot;, GitTreeState:&quot;clean&quot;, BuildDate:&quot;2021-04-08T16:31:21Z&quot;, GoVersion:&quot;go1.16.1&quot;, Compiler:&quot;gc&quot;, Platform:&quot;linux/amd64&quot;} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为安装的版本是 GitVersion:&quot;v1.21.0&quot;</span></span>
<span class="line"><span>下面的yaml文件中的对应版本需要改为  v1.21.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s-master01[18:28:03]:~$ cat kubeadm-config.yaml </span></span>
<span class="line"><span>apiVersion: kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span>bootstrapTokens:</span></span>
<span class="line"><span>- groups:</span></span>
<span class="line"><span>  - system:bootstrappers:kubeadm:default-node-token</span></span>
<span class="line"><span>  token: 7t2weq.bjbawausm0jaxury</span></span>
<span class="line"><span>  ttl: 24h0m0s</span></span>
<span class="line"><span>  usages:</span></span>
<span class="line"><span>  - signing</span></span>
<span class="line"><span>  - authentication</span></span>
<span class="line"><span>kind: InitConfiguration</span></span>
<span class="line"><span>localAPIEndpoint:</span></span>
<span class="line"><span>  advertiseAddress: 192.168.3.31</span></span>
<span class="line"><span>  bindPort: 6443</span></span>
<span class="line"><span>nodeRegistration:</span></span>
<span class="line"><span>  criSocket: /var/run/dockershim.sock</span></span>
<span class="line"><span>  name: k8s-master01</span></span>
<span class="line"><span>  taints:</span></span>
<span class="line"><span>  - effect: NoSchedule</span></span>
<span class="line"><span>    key: node-role.kubernetes.io/master</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiServer:</span></span>
<span class="line"><span>  certSANs:</span></span>
<span class="line"><span>  - 192.168.3.100</span></span>
<span class="line"><span>  timeoutForControlPlane: 4m0s</span></span>
<span class="line"><span>apiVersion: kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span>certificatesDir: /etc/kubernetes/pki</span></span>
<span class="line"><span>clusterName: kubernetes</span></span>
<span class="line"><span>controlPlaneEndpoint: 192.168.3.100:16443</span></span>
<span class="line"><span>controllerManager: {}</span></span>
<span class="line"><span>dns:</span></span>
<span class="line"><span>  type: CoreDNS</span></span>
<span class="line"><span>etcd:</span></span>
<span class="line"><span>  local:</span></span>
<span class="line"><span>    dataDir: /var/lib/etcd</span></span>
<span class="line"><span>imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers</span></span>
<span class="line"><span>kind: ClusterConfiguration</span></span>
<span class="line"><span>kubernetesVersion: v1.21.0</span></span>
<span class="line"><span>networking:</span></span>
<span class="line"><span>  dnsDomain: cluster.local</span></span>
<span class="line"><span>  podSubnet: 10.244.0.0/16</span></span>
<span class="line"><span>  serviceSubnet: 10.96.0.0/12</span></span>
<span class="line"><span>scheduler: {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#更新kubeadm文件: kubeadm-config.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubeadm config migrate --old-config kubeadm-config.yaml --new-config new.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#将new.yaml文件复制到其他master节点，之后所有Master节点提前下载镜像，可以节省初始化时间：</span></span>
<span class="line"><span>for i in k8s-master02 k8s-master03; do scp new.yaml $i:/root/; done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在其他master节点提前下载镜像，用于解决初始化时间</span></span>
<span class="line"><span>kubeadm config images pull --config /root/new.yaml</span></span>
<span class="line"><span>systemctl enable --now kubelet</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#执行kubeadm config images pull --config /root/new.yaml如果出现如下报错</span></span>
<span class="line"><span>[config/images] Pulled registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.4.1 </span></span>
<span class="line"><span>[config/images] Pulled registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0 </span></span>
<span class="line"><span>failed to pull image &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/coredns/coredns:v1.8.0&quot;: output: Error response from daemon: manifest for registry.cn-hangzhou.aliyuncs.com/google_containers/coredns/coredns:v1.8.0 not found: manifest unknown: manifest unknown </span></span>
<span class="line"><span>, error: exit status 1 </span></span>
<span class="line"><span>To see the stack trace of this error execute with --v=5 or higher </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#coredns如果没有成功</span></span>
<span class="line"><span>出现ImagePullBackOff：</span></span>
<span class="line"><span>coredns-57d4cbf879-gnh6j        0/1     ImagePullBackOff   0          6m </span></span>
<span class="line"><span>coredns-57d4cbf879-z79bt        0/1     ImagePullBackOff   0          6m</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#请所有节点执行，用于下载镜像即可：</span></span>
<span class="line"><span>docker pull registry.cn-beijing.aliyuncs.com/dotbalo/coredns:1.8.0</span></span>
<span class="line"><span>docker tag registry.cn-beijing.aliyuncs.com/dotbalo/coredns:1.8.0 registry.cn-hangzhou.aliyuncs.com/google_containers/coredns/coredns:v1.8.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#再次查看就会自动拉起</span></span>
<span class="line"><span>coredns-57d4cbf879-gnh6j                  1/1     Running   0          16h </span></span>
<span class="line"><span>coredns-57d4cbf879-z79bt                  1/1     Running   0          16h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2、-master01初始化" tabindex="-1"><a class="header-anchor" href="#_4-2、-master01初始化"><span>4.2、 master01初始化</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#master01节点执行初始化：</span></span>
<span class="line"><span>kubeadm init --config /root/new.yaml --upload-certs</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果初始化失败，重置后再次初始化，命令如下：</span></span>
<span class="line"><span>kubeadm reset -f ; ipvsadm --clear ; rm -rf ~/.kube</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键提示信息：</span></span>
<span class="line"><span>You should now deploy a pod network to the cluster. </span></span>
<span class="line"><span>Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at: </span></span>
<span class="line"><span>  https://kubernetes.io/docs/concepts/cluster-administration/addons/ </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>You can now join any number of the control-plane node running the following command on each as root: </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> [其他master加入集群]</span></span>
<span class="line"><span>  kubeadm join 192.168.3.100:16443 --token 7t2weq.bjbawausm0jaxury \\ </span></span>
<span class="line"><span>        --discovery-token-ca-cert-hash sha256:aeb438bb077768d6626fbc5f2ff61a903bfea24c2eaaa3fde49bace433176384 \\ </span></span>
<span class="line"><span>        --control-plane --certificate-key 530a5f56ce32e4ab69b384f41e6165327e23577f4924558b36efb6bb08a883e5 </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Please note that the certificate-key gives access to cluster sensitive data, keep it secret! </span></span>
<span class="line"><span>As a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use </span></span>
<span class="line"><span>&quot;kubeadm init phase upload-certs --upload-certs&quot; to reload certs afterward. </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Then you can join any number of worker nodes by running the following on each as root: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[其他node加入集群]</span></span>
<span class="line"><span>kubeadm join 192.168.3.100:16443 --token 7t2weq.bjbawausm0jaxury \\ </span></span>
<span class="line"><span>        --discovery-token-ca-cert-hash sha256:aeb438bb077768d6626fbc5f2ff61a903bfea24c2eaaa3fde49bace433176384  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#优化</span></span>
<span class="line"><span>mkdir -p $HOME/.kube </span></span>
<span class="line"><span>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config </span></span>
<span class="line"><span>sudo chown $(id -u):$(id -g) $HOME/.kube/config </span></span>
<span class="line"><span>cat &lt;&lt;EOF &gt;&gt; /root/.bashrc</span></span>
<span class="line"><span>export KUBECONFIG=/etc/kubernetes/admin.conf</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>source /root/.bashrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、master02-master03-加入master集群" tabindex="-1"><a class="header-anchor" href="#_4-2、master02-master03-加入master集群"><span>4.2、master02 master03 加入master集群</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#Token过期后生成新的token：</span></span>
<span class="line"><span>kubeadm token create --print-join-command</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Master需要生成-certificate-key</span></span>
<span class="line"><span>root@k8s-master01[15:36:45]:~$ kubeadm init phase upload-certs --upload-certs </span></span>
<span class="line"><span>[upload-certs] Storing the certificates in Secret &quot;kubeadm-certs&quot; in the &quot;kube-system&quot; Namespace </span></span>
<span class="line"><span>[upload-certs] Using certificate key: </span></span>
<span class="line"><span>9b5153fe13fe5a9286eb68fae35311f7357b854a2f8ad925bc7e45b16d2b886e </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#其他master加入集群</span></span>
<span class="line"><span>kubeadm join 192.168.3.100:16443 --token fgtxr1.bz6dw1tci1kbj977    --discovery-token-ca-cert-hash sha256:06ebf46458a41922ff1f5b3bc49365cf3dd938f1a7e3e4a8c8049b5ec5a3aaa5 \\</span></span>
<span class="line"><span>   --control-plane --certificate-key 9b5153fe13fe5a9286eb68fae35311f7357b854a2f8ad925bc7e45b16d2b886e</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3、worker01-worker02-worker03-加入master集群" tabindex="-1"><a class="header-anchor" href="#_4-3、worker01-worker02-worker03-加入master集群"><span>4.3、worker01 worker02 worker03 加入master集群</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm join 192.168.1.160:16443 --token 7t2weq.bjbawausm0jaxury --discovery-token-ca-cert-hash sha256:aeb438bb077768d6626fbc5f2ff61a903bfea24c2eaaa3fde49bace433176384</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#过程</span></span>
<span class="line"><span>root@k8s-work01[15:29:45]:~$ kubeadm join 192.168.3.100:16443 --token 7t2weq.bjbawausm0jaxury \\ </span></span>
<span class="line"><span>&gt; --discovery-token-ca-cert-hash sha256:aeb438bb077768d6626fbc5f2ff61a903bfea24c2eaaa3fde49bace433176384 </span></span>
<span class="line"><span>[preflight] Running pre-flight checks </span></span>
<span class="line"><span>[preflight] Reading configuration from the cluster... </span></span>
<span class="line"><span>[preflight] FYI: You can look at this config file with &#39;kubectl -n kube-system get cm kubeadm-config -o yaml&#39; </span></span>
<span class="line"><span>[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot; </span></span>
<span class="line"><span>[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot; </span></span>
<span class="line"><span>[kubelet-start] Starting the kubelet </span></span>
<span class="line"><span>[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap... </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>This node has joined the cluster: </span></span>
<span class="line"><span>* Certificate signing request was sent to apiserver and a response was received. </span></span>
<span class="line"><span>* The Kubelet was informed of the new secure connection details. </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Run &#39;kubectl get nodes&#39; on the control-plane to see this node join the cluster.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4、加入结果预览" tabindex="-1"><a class="header-anchor" href="#_4-4、加入结果预览"><span>4.4、加入结果预览</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s-master01[16:06:10]:~$ kubectl get nodes </span></span>
<span class="line"><span>NAME           STATUS     ROLES                  AGE     VERSION </span></span>
<span class="line"><span>k8s-master01   NotReady   control-plane,master   6m15s   v1.21.0 </span></span>
<span class="line"><span>k8s-master02   NotReady   control-plane,master   5m23s   v1.21.0 </span></span>
<span class="line"><span>k8s-master03   NotReady   control-plane,master   4m21s   v1.21.0 </span></span>
<span class="line"><span>k8s-worker01     NotReady   &lt;none&gt;                 11s     v1.21.0 </span></span>
<span class="line"><span>k8s-worker02     NotReady   &lt;none&gt;                 0s      v1.21.0</span></span>
<span class="line"><span>k8s-worker03     NotReady   &lt;none&gt;                 0s      v1.21.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>采用初始化安装方式，所有的系统组件均以容器的方式运行并且在kube-system命名空间内，此时可以查看Pod状态：</span></span>
<span class="line"><span>root@k8s-master01[20:18:57]:~$ kubectl get pod -n kube-system </span></span>
<span class="line"><span>NAME                                   READY   STATUS    RESTARTS   AGE </span></span>
<span class="line"><span>coredns-57d4cbf879-8vs6c               0/1     Pending   0          75m </span></span>
<span class="line"><span>coredns-57d4cbf879-p99nc               0/1     Pending   0          75m </span></span>
<span class="line"><span>etcd-k8s-master01                      1/1     Running   0          75m </span></span>
<span class="line"><span>etcd-k8s-master02                      1/1     Running   0          4m45s </span></span>
<span class="line"><span>etcd-k8s-master03                      1/1     Running   0          4m23s </span></span>
<span class="line"><span>kube-apiserver-k8s-master01            1/1     Running   0          75m </span></span>
<span class="line"><span>kube-apiserver-k8s-master02            1/1     Running   0          4m45s </span></span>
<span class="line"><span>kube-apiserver-k8s-master03            1/1     Running   0          4m10s </span></span>
<span class="line"><span>kube-controller-manager-k8s-master01   1/1     Running   1          75m </span></span>
<span class="line"><span>kube-controller-manager-k8s-master02   1/1     Running   0          4m45s </span></span>
<span class="line"><span>kube-controller-manager-k8s-master03   1/1     Running   0          4m21s </span></span>
<span class="line"><span>kube-proxy-2zc6p                       1/1     Running   0          4m46s </span></span>
<span class="line"><span>kube-proxy-djtbn                       1/1     Running   0          3m30s </span></span>
<span class="line"><span>kube-proxy-g2ddr                       1/1     Running   0          75m </span></span>
<span class="line"><span>kube-proxy-gf7w8                       1/1     Running   0          3m34s </span></span>
<span class="line"><span>kube-proxy-mfsbz                       1/1     Running   0          3m59s </span></span>
<span class="line"><span>kube-scheduler-k8s-master01            1/1     Running   1          75m </span></span>
<span class="line"><span>kube-scheduler-k8s-master02            1/1     Running   0          4m45s </span></span>
<span class="line"><span>kube-scheduler-k8s-master03            1/1     Running   0          4m19s </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#出现 coredns Pending状态，原因是因为没有网络</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5、master01节点配置环境变量-用于访问kubernetes集群" tabindex="-1"><a class="header-anchor" href="#_4-5、master01节点配置环境变量-用于访问kubernetes集群"><span>4.5、Master01节点配置环境变量，用于访问Kubernetes集群：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF &gt;&gt; /root/.bashrc</span></span>
<span class="line"><span>export KUBECONFIG=/etc/kubernetes/admin.conf</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>source /root/.bashrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、安装calico网络组件-master01操作" tabindex="-1"><a class="header-anchor" href="#_5、安装calico网络组件-master01操作"><span>5、安装calico网络组件[master01操作]</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#运行calicon文件，无需配置改变，直接运行</span></span>
<span class="line"><span>kubectl create -f https://docs.projectcalico.org/archive/v3.21/manifests/tigera-operator.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#不建议直接使用需要修改，符合kubernetes集群环境才行，因此先下载到本地</span></span>
<span class="line"><span>#kubectl create -f https://docs.projectcalico.org/archive/v3.21/manifests/custom-resources.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir calicodir</span></span>
<span class="line"><span>cd calicodir</span></span>
<span class="line"><span>wget https://docs.projectcalico.org/archive/v3.21/manifests/custom-resources.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#需要修改的地方如下：</span></span>
<span class="line"><span>[root@master01 calicodir]# cat custom-resources.yaml </span></span>
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
<span class="line"><span>spec: {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#接着对该资源清单文件进行使用</span></span>
<span class="line"><span>[root@master01 calicodir]# kubectl apply -f custom-resources.yaml </span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>##官方建议直接使用watch命令查看，直到他全部运行为止</span></span>
<span class="line"><span>watch kubectl get pods -n calico-system</span></span>
<span class="line"><span>##我们发现特别慢，原因是因为kubernetes的master节点不允许做工作负载调度，因此需要一个操作，取消污点，命令如下：</span></span>
<span class="line"><span>kubectl taint nodes --all node-role.kubernetes.io/master-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##接着我们再次查看，等待直到完成，这个过程巨慢</span></span>
<span class="line"><span>watch kubectl get pods -n calico-system</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#最后查看容器和节点状态:</span></span>
<span class="line"><span>root@k8s-master01[18:34:00]:~$ kubectl get pod -n kube-system</span></span>
<span class="line"><span>NAME                                   READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>coredns-6f6b8cc4f6-dd2kf               1/1     Running   0          4h4m</span></span>
<span class="line"><span>coredns-6f6b8cc4f6-f9gw8               1/1     Running   0          4h4m</span></span>
<span class="line"><span>etcd-k8s-master01                      1/1     Running   5          4h4m</span></span>
<span class="line"><span>etcd-k8s-master02                      1/1     Running   0          4h4m</span></span>
<span class="line"><span>etcd-k8s-master03                      1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-apiserver-k8s-master01            1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-apiserver-k8s-master02            1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-apiserver-k8s-master03            1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-controller-manager-k8s-master01   1/1     Running   1          4h4m</span></span>
<span class="line"><span>kube-controller-manager-k8s-master02   1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-controller-manager-k8s-master03   1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-proxy-8fpmv                       1/1     Running   0          4h3m</span></span>
<span class="line"><span>kube-proxy-8sw6v                       1/1     Running   0          4h3m</span></span>
<span class="line"><span>kube-proxy-9chjn                       1/1     Running   0          4h3m</span></span>
<span class="line"><span>kube-proxy-ctrth                       1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-proxy-gsst4                       1/1     Running   0          4h4m</span></span>
<span class="line"><span>kube-proxy-qb9kh                       1/1     Running   0          4h3m</span></span>
<span class="line"><span>kube-scheduler-k8s-master01            1/1     Running   13         4h4m</span></span>
<span class="line"><span>kube-scheduler-k8s-master02            1/1     Running   4          4h4m</span></span>
<span class="line"><span>kube-scheduler-k8s-master03            1/1     Running   4          4h4m</span></span>
<span class="line"><span>You have new mail in /var/spool/mail/root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、安装dashboard" tabindex="-1"><a class="header-anchor" href="#_6、安装dashboard"><span>6、安装dashboard</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#1. 安装老版本</span></span>
<span class="line"><span>cd /root/k8s-ha-install/dashboard/</span></span>
<span class="line"><span>kubectl create -f .</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2. 安装最新版：</span></span>
<span class="line"><span>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#授权：</span></span>
<span class="line"><span>vim admin.yaml</span></span>
<span class="line"><span>#--------------------------admin.yaml--------------------------#</span></span>
<span class="line"><span>apiVersion: v1 </span></span>
<span class="line"><span>kind: ServiceAccount </span></span>
<span class="line"><span>metadata: </span></span>
<span class="line"><span>  name: admin-user </span></span>
<span class="line"><span>  namespace: kube-system </span></span>
<span class="line"><span>--- </span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1 </span></span>
<span class="line"><span>kind: ClusterRoleBinding </span></span>
<span class="line"><span>metadata: </span></span>
<span class="line"><span>  name: admin-user </span></span>
<span class="line"><span>  annotations: </span></span>
<span class="line"><span>    rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot; </span></span>
<span class="line"><span>roleRef: </span></span>
<span class="line"><span>  apiGroup: rbac.authorization.k8s.io </span></span>
<span class="line"><span>  kind: ClusterRole </span></span>
<span class="line"><span>  name: cluster-admin </span></span>
<span class="line"><span>subjects: </span></span>
<span class="line"><span>- kind: ServiceAccount </span></span>
<span class="line"><span>  name: admin-user </span></span>
<span class="line"><span>  namespace: kube-system</span></span>
<span class="line"><span>#--------------------------admin.yaml--------------------------#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#执行安装</span></span>
<span class="line"><span>kubectl apply -f admin.yaml -n kube-system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>登录dashboard</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>在谷歌浏览器（Chrome）启动文件中加入启动参数，用于解决无法访问Dashboard的问题，参考图1-1：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>谷歌浏览器添加参数：</span></span>
<span class="line"><span>--test-type --ignore-certificate-errors</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>更改dashboard的svc为NodePort：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>spec: </span></span>
<span class="line"><span>  clusterIP: 10.108.157.21 </span></span>
<span class="line"><span>  clusterIPs: </span></span>
<span class="line"><span>  - 10.108.157.21 </span></span>
<span class="line"><span>  externalTrafficPolicy: Cluster </span></span>
<span class="line"><span>  ports: </span></span>
<span class="line"><span>  - nodePort: 30195 </span></span>
<span class="line"><span>    port: 443 </span></span>
<span class="line"><span>    protocol: TCP </span></span>
<span class="line"><span>    targetPort: 8443 </span></span>
<span class="line"><span>  selector: </span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard </span></span>
<span class="line"><span>  sessionAffinity: None </span></span>
<span class="line"><span>  type: ClusterIP     #改为 NodePort </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#修改完成后如下：</span></span>
<span class="line"><span>spec: </span></span>
<span class="line"><span>  clusterIP: 10.108.157.21 </span></span>
<span class="line"><span>  clusterIPs: </span></span>
<span class="line"><span>  - 10.108.157.21 </span></span>
<span class="line"><span>  externalTrafficPolicy: Cluster </span></span>
<span class="line"><span>  ports: </span></span>
<span class="line"><span>  - nodePort: 30195 </span></span>
<span class="line"><span>    port: 443 </span></span>
<span class="line"><span>    protocol: TCP </span></span>
<span class="line"><span>    targetPort: 8443 </span></span>
<span class="line"><span>  selector: </span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard </span></span>
<span class="line"><span>  sessionAffinity: None </span></span>
<span class="line"><span>  type: NodePort      #已经改为NodePort</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>修改完成后访问dashboard：</span></span>
<span class="line"><span>#查看端口号：</span></span>
<span class="line"><span>kubectl get svc kubernetes-dashboard -n kubernetes-dashboard</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、通过https协议进行访问" tabindex="-1"><a class="header-anchor" href="#_7、通过https协议进行访问"><span>7、通过https协议进行访问</span></a></h2><p><code>https://192.168.3.31:30995/</code><img src="`+l+`" alt="" loading="lazy"></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#查看token值：</span></span>
<span class="line"><span>kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk &#39;{print $1}&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#得到 token:</span></span>
<span class="line"><span>eyJhbGciOiJSUzI1NiIsImtpZCI6IlFkM3BUd0xxVEZ6a0t4Njl2QnVaMWhLNUl4NFlzUkVrQngzbmlQeG4zczgifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXRidjRkIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI0MzI2NDM1My1iNzY4LTRlNTEtYjljZS0wY2FlMzJlNThmOTgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.jKtz39e-9EBlLhIW571Ms63ywad2z0s2hEa0ZalBRcEDXDKLN7jDejTLrrcyeNY5pRa8AUtbS1ckiYWI7OOlR3PBjD5Tgaz2HEKFw0FEoNMQnU8uLzR5WbUX4obOpzAyB4WYmCS9vK-ud98mmMHOT15Ee2BeaxIWTBL715m-NJcIxxByvsBtogVj7zWJayAVLOspMLps8hWk8XJDXpWEx0J8uU9KUPOey3YMiO5gNlk5TRHcZJOGg_7HV8_55MqKTQ8K9Jhsu5uVieB3kuJdwJdcGCGrMi1UVGx-RgJwGbZqMkXgy55QAp2he_sNFZmThhuxvz7FIclUyyoUZ43V9Q</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将token粘贴到web页面上的token输入栏</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8、-配置修改" tabindex="-1"><a class="header-anchor" href="#_8、-配置修改"><span>8、 配置修改</span></a></h2><blockquote><p>将Kube-proxy改为ipvs模式，因为在初始化集群的时候注释了ipvs配置，所以需要自行修改一下： 在master01节点执行</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>kubectl edit cm kube-proxy -n kube-system</span></span>
<span class="line"><span>mode： 修改为 mode: ipvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新Kube-Proxy的Pod：</span></span>
<span class="line"><span>kubectl patch daemonset kube-proxy -p &quot;{\\&quot;spec\\&quot;:{\\&quot;template\\&quot;:{\\&quot;metadata\\&quot;:{\\&quot;annotations\\&quot;:{\\&quot;date\\&quot;:\\&quot;\`date +&#39;%s&#39;\`\\&quot;}}}}}&quot; -n kube-system</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>验证Kube-Proxy模式：</span></span>
<span class="line"><span>curl 127.0.0.1:10249/proxyMode</span></span>
<span class="line"><span>ipvs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最后集群状态</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>root@k8s-master01[10:36:14]:~$ kubectl get nodes</span></span>
<span class="line"><span>NAME           STATUS   ROLES                  AGE   VERSION</span></span>
<span class="line"><span>k8s-master01   Ready    control-plane,master   19h   v1.21.14</span></span>
<span class="line"><span>k8s-master02   Ready    control-plane,master   19h   v1.21.14</span></span>
<span class="line"><span>k8s-master03   Ready    control-plane,master   19h   v1.21.14</span></span>
<span class="line"><span>k8s-worker01   Ready    &lt;none&gt;                 19h   v1.21.14</span></span>
<span class="line"><span>k8s-worker02   Ready    &lt;none&gt;                 19h   v1.21.14</span></span>
<span class="line"><span>k8s-worker03   Ready    &lt;none&gt;                 19h   v1.21.14</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、-高可用测试" tabindex="-1"><a class="header-anchor" href="#_9、-高可用测试"><span>9、 高可用测试</span></a></h2><p><code>k8s-master01是vip地址，停止eth0后vip消失，vip地址会漂移到k8s-master01上</code></p><h2 id="_10、-安装kuboard集群管理面板" tabindex="-1"><a class="header-anchor" href="#_10、-安装kuboard集群管理面板"><span>10、 安装Kuboard集群管理面板</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#在master01节点上执行</span></span>
<span class="line"><span>kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3.yaml</span></span>
<span class="line"><span># 您也可以使用下面的指令，唯一的区别是，该指令使用华为云的镜像仓库替代 docker hub 分发 Kuboard 所需要的镜像</span></span>
<span class="line"><span># kubectl apply -f https://addons.kuboard.cn/kuboard/kuboard-v3-swr.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#执行指令 watch kubectl get pods -n kuboard，等待 kuboard 名称空间中所有的 Pod 就绪，如下所示，</span></span>
<span class="line"><span>Every 2.0s: kubectl get pods -n kuboard                          Thu Jan 18 14:20:40 2024</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NAME                          READY   STATUS              RESTARTS   AGE</span></span>
<span class="line"><span>kuboard-etcd-ltkjt            1/1     Running             0          3m54s</span></span>
<span class="line"><span>kuboard-etcd-m257r            0/1     ContainerCreating   0          3m54s</span></span>
<span class="line"><span>kuboard-etcd-q6dqw            1/1     Running             0          3m54s</span></span>
<span class="line"><span>kuboard-v3-5fc46b5557-qq6pk   0/1     ContainerCreating   0          3m53s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#最终完成后的状态</span></span>
<span class="line"><span>Every 2.0s: kubectl get pods -n kuboard                          Thu Jan 18 14:26:54 2024</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NAME                               READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span>kuboard-agent-2-78b6856bb5-kw67d   1/1     Running   1          3m58s</span></span>
<span class="line"><span>kuboard-agent-857d7b8f45-dmctj     1/1     Running   1          3m58s</span></span>
<span class="line"><span>kuboard-etcd-ltkjt                 1/1     Running   0          10m</span></span>
<span class="line"><span>kuboard-etcd-m257r                 1/1     Running   0          10m</span></span>
<span class="line"><span>kuboard-etcd-q6dqw                 1/1     Running   0          10m</span></span>
<span class="line"><span>kuboard-questdb-586fb449fc-hdvwp   1/1     Running   0          3m58s</span></span>
<span class="line"><span>kuboard-v3-5fc46b5557-qq6pk        1/1     Running   0          10m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>访问 Kuboard</strong></p><blockquote><p>在浏览器中打开链接 http://your-node-ip-address:30080 输入初始用户名和密码，并登录 用户名： admin 密码： Kuboard123 浏览器兼容性 请使用 Chrome / FireFox / Safari / Edge 等浏览器 不兼容 IE 以及以 IE 为内核的浏览器 添加新的集群 Kuboard v3 是支持 Kubernetes 多集群管理的，在 Kuboard v3 的首页里，点击 添加集群 按钮，在向导的引导下可以完成集群的添加； 向 Kuboard v3 添加新的 Kubernetes 集群时，请确保： 您新添加集群可以访问到当前集群 Master 节点 内网IP 的 30080 TCP、30081 TCP、30081 UDP 端口； 如果您打算新添加到 Kuboard 中的集群与当前集群不在同一个局域网，请咨询 Kuboard 团队，帮助您解决问题。</p></blockquote><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>根据提示添加集群，最后效果如下</strong></p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',87),v=[t];function u(m,b){return a(),n("div",null,v)}const k=s(r,[["render",u],["__file","01.html.vue"]]),g=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/High%20availability/01.html","title":"01-部署3主3从的高可用集群","lang":"zh-CN","frontmatter":{"title":"01-部署3主3从的高可用集群","order":1,"icon":"lightbulb","description":"部署3主3从的kubernetes1.21.0高可用集群环境 参考地址：https://www.cnblogs.com/superlinux/p/14676959.html 1、主机操作系统说明 2、主机硬件配置说明 花里胡哨的美化配置 3、主机配置 3.1、配置yum源，所有主机都配置 采用阿里云源 下载安装所有的源码文件，后面需要用到 3.2、修改...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/kubernetes/install/kubeadm/High%20availability/01.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-部署3主3从的高可用集群"}],["meta",{"property":"og:description","content":"部署3主3从的kubernetes1.21.0高可用集群环境 参考地址：https://www.cnblogs.com/superlinux/p/14676959.html 1、主机操作系统说明 2、主机硬件配置说明 花里胡哨的美化配置 3、主机配置 3.1、配置yum源，所有主机都配置 采用阿里云源 下载安装所有的源码文件，后面需要用到 3.2、修改..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-部署3主3从的高可用集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、主机操作系统说明","slug":"_1、主机操作系统说明","link":"#_1、主机操作系统说明","children":[]},{"level":2,"title":"2、主机硬件配置说明","slug":"_2、主机硬件配置说明","link":"#_2、主机硬件配置说明","children":[]},{"level":2,"title":"3、主机配置","slug":"_3、主机配置","link":"#_3、主机配置","children":[{"level":3,"title":"3.1、配置yum源，所有主机都配置","slug":"_3-1、配置yum源-所有主机都配置","link":"#_3-1、配置yum源-所有主机都配置","children":[]},{"level":3,"title":"3.2、修改主机名，配置hosts本地解析","slug":"_3-2、修改主机名-配置hosts本地解析","link":"#_3-2、修改主机名-配置hosts本地解析","children":[]},{"level":3,"title":"3.3、所有节点优化","slug":"_3-3、所有节点优化","link":"#_3-3、所有节点优化","children":[]},{"level":3,"title":"3.4、配置免密[中控机操作:master01]","slug":"_3-4、配置免密-中控机操作-master01","link":"#_3-4、配置免密-中控机操作-master01","children":[]},{"level":3,"title":"3.5、升级内核","slug":"_3-5、升级内核","link":"#_3-5、升级内核","children":[]},{"level":3,"title":"3.6、所有节点安装ipvsadm","slug":"_3-6、所有节点安装ipvsadm","link":"#_3-6、所有节点安装ipvsadm","children":[]},{"level":3,"title":"3.7、k8s内核优化","slug":"_3-7、k8s内核优化","link":"#_3-7、k8s内核优化","children":[]},{"level":3,"title":"3.8、基本组件安装","slug":"_3-8、基本组件安装","link":"#_3-8、基本组件安装","children":[]}]},{"level":2,"title":"4、kubernetes集群初始化","slug":"_4、kubernetes集群初始化","link":"#_4、kubernetes集群初始化","children":[{"level":3,"title":"4.2、master02 master03 加入master集群","slug":"_4-2、master02-master03-加入master集群","link":"#_4-2、master02-master03-加入master集群","children":[]},{"level":3,"title":"4.3、worker01 worker02 worker03 加入master集群","slug":"_4-3、worker01-worker02-worker03-加入master集群","link":"#_4-3、worker01-worker02-worker03-加入master集群","children":[]},{"level":3,"title":"4.4、加入结果预览","slug":"_4-4、加入结果预览","link":"#_4-4、加入结果预览","children":[]},{"level":3,"title":"4.5、Master01节点配置环境变量，用于访问Kubernetes集群：","slug":"_4-5、master01节点配置环境变量-用于访问kubernetes集群","link":"#_4-5、master01节点配置环境变量-用于访问kubernetes集群","children":[]}]},{"level":2,"title":"5、安装calico网络组件[master01操作]","slug":"_5、安装calico网络组件-master01操作","link":"#_5、安装calico网络组件-master01操作","children":[]},{"level":2,"title":"6、安装dashboard","slug":"_6、安装dashboard","link":"#_6、安装dashboard","children":[]},{"level":2,"title":"7、通过https协议进行访问","slug":"_7、通过https协议进行访问","link":"#_7、通过https协议进行访问","children":[]},{"level":2,"title":"8、 配置修改","slug":"_8、-配置修改","link":"#_8、-配置修改","children":[]},{"level":2,"title":"9、 高可用测试","slug":"_9、-高可用测试","link":"#_9、-高可用测试","children":[]},{"level":2,"title":"10、 安装Kuboard集群管理面板","slug":"_10、-安装kuboard集群管理面板","link":"#_10、-安装kuboard集群管理面板","children":[]}],"git":{},"readingTime":{"minutes":18.58,"words":5574},"filePathRelative":"note/kubernetes/install/kubeadm/High availability/01.md","autoDesc":true}');export{k as comp,g as data};
