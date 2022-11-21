// ==UserScript==
// @name 拒绝二维码登录
// @namespace NoQRCodeLogin
// @version 3.0.2
// @icon data:image/png;base64,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
// @description QQ、支付宝、京东等网站默认使用账号密码登录，不出现二维码登录界面,可自定义设置在指定网站开启和关闭，有需求或问题请反馈。
// @author Eva
// @license GPL
// @match *://passport.jd.com/*
// @match *://*.baidu.com/*
// @match *://*.douban.com/*
// @match *://passport.suning.com/*
// @match *://*.zhihu.com/*
// @match *://*.alipay.com/*
// @match *://account.aliyun.com/*
// @match *://*.qq.com/*
// @match *://*.weiyun.com/*
// @match *://*.cloud.tencent.com/*
// @match *://*.qcloud.com/*
// @match *://www.acfun.cn/*
// @match *://music.163.com/*
// @match *://*.douyu.com/*
// @match *://*.huya.com/*
// @match *://*.smzdm.com/*
// @match *://ipassport.kaola.com/*
// @match *://login.10086.cn/*
// @match *://mail.10086.cn/*
// @match *://*.e.189.cn/*
// @match *://js.189.cn/*
// @match *://*.aliyundrive.com/*
// @match *://passport.csdn.net/*
// @match *://account.dianping.com/*
// @match *://etax.chinatax.gov.cn/*
// @match *://*.115.com/*
// @match *://*.tianya.cn/*
// @match *://*.dnspod.cn/*
// @match *://www.qcc.com/*
// @match *://mms.pinduoduo.com/*
// @match *://passport.shop.jd.com/*
// @match *://*.tyrz.gd.gov.cn/*
// @match *://*.baixing.com/*
// @match *://*.passport.sangon.com/*
// @match *://*.passport.21cnjy.com/*
// @match *://login.xueanquan.com/*
// @match *://account.geekbang.org/*
// @match *://*.icourse163.org/*
// @match *://*.ziroom.com/*
// @match *://*.fuwu.nhsa.gov.cn/*
// @match *://bbs.nga.cn/*
// @match *://ngabbs.com/*
// @match *://nga.178.com/*
// @match *://www.ouryao.com/*
// @match *://leetcode.cn/*
// @grant unsafeWindow
// @grant GM_getValue
// @grant GM_setValue
// @grant GM.deleteValue
// @grant GM_registerMenuCommand
// @require https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js
// @run-at document-end
// ==/UserScript==
 
(function () {
 // 注册菜单
 GM_registerMenuCommand("拒绝二维码登录开关设置", () => {
 const settings = new Settings()
 settings.show()
 })
 
 // 定义默认配置
 const settingData = {
 'jd': { 'name': '京东', 'url': 'passport.jd.com', 'enabled': true },
 'baidu': { 'name': '百度', 'url': 'baidu.com', 'enabled': true },
 'douban': { 'name': '豆瓣', 'url': 'douban.com', 'enabled': true },
 'suning': { 'name': '苏宁易购', 'url': 'passport.suning.com', 'enabled': true },
 'zhihu': { 'name': '知乎', 'url': 'zhihu.com', 'enabled': true },
 'alipay': { 'name': '支付宝', 'url': 'alipay.com', 'enabled': true },
 'aliyun': { 'name': '阿里云', 'url': 'account.aliyun.com', 'enabled': true },
 'qq': {
 'name': '腾讯QQ(含微云)',
 'url': ['xui.ptlogin2.qq.com', 'ssl.xui.ptlogin2.qq.com', 'ssl.xui.ptlogin2.weiyun.com', 'ui.ptlogin2.qq.com'],
 'enabled': true
 },
 'qq_support': { 'name': '腾讯产品交流', 'url': 'support.qq.com', 'enabled': true },
 'tencent_cloud': { 'name': '腾讯云', 'url': ['cloud.tencent.com', 'qcloud.com'], 'enabled': true },
 'qq_exmail': { 'name': '腾讯企业邮箱', 'url': 'exmail.qq.com', 'enabled': true },
 'weixin_pay': { 'name': '微信支付', 'url': 'pay.weixin.qq.com', 'enabled': true },
 'acfun': { 'name': 'AcFun', 'url': 'www.acfun.cn', 'enabled': true },
 'netease_music': { 'name': '网易云音乐', 'url': 'music.163.com', 'enabled': true },
 'douyu': { 'name': '斗鱼', 'url': 'douyu.com', 'enabled': true },
 'huya': { 'name': '虎牙直播', 'url': 'huya.com', 'enabled': true },
 'smzdm': { 'name': '什么值得买', 'url': 'smzdm.com', 'enabled': true },
 'kaola': { 'name': '考拉海购', 'url': 'ipassport.kaola.com', 'enabled': true },
 '10086': { 'name': '中国移动', 'url': 'login.10086.cn', 'enabled': true },
 '10086_mail': { 'name': '139邮箱', 'url': 'mail.10086.cn', 'enabled': true },
 '189_e': { 'name': '天翼云盘', 'url': 'open.e.189.cn', 'enabled': true },
 '189_js': { 'name': '江苏电信', 'url': 'js.189.cn', 'enabled': true },
 'aliyundrive': { 'name': '阿里云盘', 'url': 'aliyundrive.com', 'enabled': true },
 'csdn': { 'name': 'CSDN', 'url': 'passport.csdn.net', 'enabled': true },
 'dianping': { 'name': '大众点评', 'url': 'account.dianping.com', 'enabled': true },
 'chinatax': { 'name': '自然人电子税务局', 'url': 'etax.chinatax.gov.cn', 'enabled': true },
 '115': { 'name': '115云', 'url': '115.com', 'enabled': true },
 'tianya': { 'name': '天涯社区', 'url': 'tianya.cn', 'enabled': true },
 'dnspod': { 'name': 'DNSPod', 'url': 'dnspod.cn', 'enabled': true },
 'qcc': { 'name': '企查查', 'url': 'www.qcc.com', 'enabled': true },
 'pinduoduo_mms': { 'name': '拼多多商家', 'url': 'mms.pinduoduo.com', 'enabled': true },
 'jd_shop': { 'name': '京麦', 'url': 'passport.shop.jd.com', 'enabled': true },
 'gd_tyrz': { 'name': '广东统一身份认证', 'url': 'tyrz.gd.gov.cn', 'enabled': true },
 'baixing': { 'name': '百姓网', 'url': 'baixing.com', 'enabled': true },
 'sangon': { 'name': '生工', 'url': 'passport.sangon.com', 'enabled': true },
 '21cnjy': { 'name': '21世纪教育', 'url': 'passport.21cnjy.com', 'enabled': true },
 'xueanquan': { 'name': '学校安全教育平台', 'url': 'login.xueanquan.com', 'enabled': true },
 'geekbang': { 'name': '极客邦科技', 'url': 'account.geekbang.org', 'enabled': true },
 'icourse163': { 'name': '中国大学MOOC', 'url': 'icourse163.org', 'enabled': true },
 'ziroom': { 'name': '自如', 'url': 'ziroom.com', 'enabled': true },
 'nhsa_fuwu': { 'name': '国家医保服务平台', 'url': 'fuwu.nhsa.gov.cn', 'enabled': true },
 'nga': { 'name': 'NGA玩家社群', 'url': ['bbs.nga.cn', 'ngabbs.com', 'nga.178.com'], 'enabled': true },
 'ouryao': { 'name': '蒲公英论坛', 'url': 'ouryao.com', 'enabled': true },
 'leetcode_cn': { 'name': '力扣中国', 'url': 'leetcode.cn', 'enabled': true },
 }
 
 const _main = main()
 // 检查更新当前用户配置，并返回最新用户配置
 const storageData = checkSettingUpdate()
 start()
 
 function start() {
 const current = window.location.hostname
 let match = false
 for (const key in storageData) {
 const data = storageData[key]
 const url = data.url
 const enabled = data.enabled
 if (Array.isArray(url)) {
 url.forEach(x => {
 if (current.includes(x)) {
 console.log("网址：%s 可切换为密码登录,状态：%s", x, enabled ? '启用' : '禁用')
 match = true
 if (enabled) _main[key]()
 return
 }
 })
 if (match) break
 } else {
 if (current.includes(url)) {
 console.log("网址：%s 可切换为密码登录,状态：%s", url, enabled ? '启用' : '禁用')
 if (enabled) _main[key]()
 break
 }
 }
 }
 }
 
 function main() {
 return {
 // 京东
 jd() {
 const targetNode = $('.login-box')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') == 'none') {
 $('.login-tab-r')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 百度
 baidu() {
 $('body').bind('DOMNodeInserted', (e) => {
 const e_chilren = $(e.target).find('[id^=TANGRAM__PSP_][id$=__footerULoginBtn]')
 if (e_chilren.length > 0) {
 setTimeout(() => e_chilren.trigger("click"), 100)
 }
 })
 },
 // 豆瓣
 douban() {
 const targetNode = $('.account-tab-account')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('on')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 苏宁易购
 suning() {
 const targetNode = $('.pc-login')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'none') {
 $('.login-tab .tab-item')[1].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 知乎
 zhihu() {
 const process = () => {
 const targetNode = $('.SignFlow-tab:contains("密码登录")').map(function () {
 if ($(this).text() == "密码登录") return this
 })[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('SignFlow-tab--active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 process()
 
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).find('.SignContainer-content').length > 0) {
 process()
 }
 })
 },
 // 支付宝
 alipay() {
 // 右上角登录按钮
 const processEntry = () => {
 const targetNode = $('li[data-status="show_login"]')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass(' active ')) {
 setTimeout(() => targetNode.click(), 150)
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 // 通用
 const processNormal = () => {
 const targetNode = $('#J-qrcode-target')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).hasClass('qrcode-target-hide')) {
 setTimeout(() => targetNode.click(), 500)
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 // iframe 登录
 const processIframe = () => {
 const targetNode = $('#J_popbox')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).hasClass('stat-login')) {
 const iframe = $('#J_loginIframe')
 const method = iframe.contents().find('#J-loginFormMethod')
 const target = iframe.contents().find('#J-qrcode-target')
 if (method.length > 0 && target.length > 0) {
 if (target.hasClass('qrcode-target-hide')) {
 setTimeout(() => target[0].click(), 500)
 }
 // 停止观察
 observer.disconnect()
 }
 }
 }
 }
 })
 }
 
 // 收银台
 const excashier = () => {
 const targetNode = $('#J_tip_qr')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'block') {
 setTimeout(() => $('a[seed="J_tip_qr-switchTipBtn"]')[0].click(), 150)
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 if (matchURL('excashier.alipay.com')) {
 excashier()
 } else {
 processEntry()
 processNormal()
 processIframe()
 }
 },
 // 阿里云
 aliyun() {
 const targetNode = $('.aliyun-account-consoleicon-user')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).closest('.tabs-item').hasClass('active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 腾讯 QQ（包含微云）
 qq() {
 const targetNode = $('#bottom_qlogin')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'block') {
 $('#switcher_plogin')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 腾讯产品交流
 qq_support() {
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).hasClass('super_login_explain')) {
 $('.super_login_qq_link')[0].click()
 }
 })
 },
 // 腾讯云
 tencent_cloud() {
 const process = () => {
 const targetNode = $('.J-qcloginBox')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'none') {
 $('.J-btnSwitchLoginType[data-type="email"]')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 process()
 
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).hasClass('J-commonLoginContent')) {
 process()
 }
 })
 },
 // 腾讯企业邮箱
 qq_exmail() {
 const targetNode = $('.login_account_pwd_panel')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'none') {
 $('.js_show_pwd_panel')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 微信支付
 weixin_pay() {
 const targetNode = $('#IDSwitchAccountLogin')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('selected')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // AcFun
 acfun() {
 const targetNode = $('#login')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('login-account')) {
 $('#login-switch').click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 网易云音乐
 netease_music() {
 $('body').bind('DOMNodeInserted', (e) => {
 const switchBtn = $(e.target).find('a:contains("选择其他登录模式")')
 const termBtn = $(e.target).find('#j-official-terms')
 if (switchBtn.length > 0) {
 setTimeout(() => switchBtn[0].click(), 0)
 }
 
 if (termBtn.length > 0) {
 setTimeout(() => {
 termBtn[0].click()
 $('a:contains("网易邮箱帐号登录")')[0].click()
 }, 0)
 }
 })
 },
 // 斗鱼
 douyu() {
 const process = () => {
 const targetNode = $('.scancode-login')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).hasClass('status-scan')) {
 setTimeout(() => $(".scanicon-toLogin")[0].click(), 100)
 $(".inputLoginBtn").on('click', () => {
 const nickname = $('.loginbox-login-subtype').find('[data-subtype="login-by-nickname"]')
 if (nickname && !nickname.hasClass('active')) {
 setTimeout(() => nickname[0].click(), 100)
 }
 })
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 process()
 
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).find('.scancode-login').length > 0) {
 process()
 }
 })
 },
 // 虎牙直播
 huya() {
 const targetNode = $('#quick-login-wrap')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') != 'none') {
 $(targetNode).find('.change-login i')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 什么值得买
 smzdm() {
 const targetNode = $('.login')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'none') {
 $('.qrcode-change')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 考拉海购
 kaola() {
 const passwordLogin = () => {
 const targetNode = $('#login')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).hasClass('login-view-sms')) {
 $(targetNode).find('.password-login-tab-item')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 const targetNode = $('.icon-sms')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).length > 0) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 
 passwordLogin()
 }
 }
 }
 })
 },
 // 中国移动
 10086() {
 const targetNode = $('#J_pc')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') != 'none') {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 139 邮箱
 '10086_mail'() {
 const targetNode = $('#Account')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('on')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 天翼云盘
 '189_e'() {
 const targetNode = $('#J_change_type')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).hasClass('icons-normal-login')) {
 $(targetNode)[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 江苏电信
 '189_js'() {
 const targetNode = $('.login_con.mobile')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') === 'none') {
 $('#menu1 li')[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 阿里云盘
 aliyundrive() {
 const targetNode = $('#login .login-blocks.block0').find(':contains("账号登录")')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).prop("nodeName") == 'A') {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // CSDN
 csdn() {
 const targetNode = $('.login-box-tabs-items')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 const btn = $(targetNode).find('span:contains(密码登录)')
 if (btn.length > 0) {
 btn[0].click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 大众点评
 dianping() {
 const passwordLogin = () => {
 const targetNode = $('.pwd')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).children('div').hasClass('segment-label-grey')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 
 
 }
 }
 }
 })
 }
 
 const targetNode = $('.pc-icon')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).length > 0) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 
 passwordLogin()
 }
 }
 }
 })
 },
 // 自然人电子税务局
 chinatax() {
 $('body').bind('DOMNodeInserted', (e) => {
 const login_container = $(e.target).find('.password-login-container')
 if (login_container.css('display') === 'none') {
 $('.login-mode-text:contains(密码登录)')[0].click()
 }
 })
 },
 // 115 云
 115() {
 const login = $('[lgb-nav="login"]')
 if (login.length > 0) {
 login[0].click()
 }
 },
 // 天涯社区
 tianya() {
 const process = () => {
 const targetNode = $('.normal-login-tab')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($('#loginWin_content_wrapper').hasClass('loginWin-qrcode-login-wrapper')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 
 process()
 
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).find('#loginWin_content_wrapper').length > 0) {
 process()
 }
 })
 },
 // DNSPod
 dnspod() {
 const targetNode = $('a[href^="/login/email"]')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).parent('.dp-login__tabitem').hasClass('is-active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 企查查
 qcc() {
 const login_change = $('.login-change')
 if (login_change.length > 0 && $('.right-c').css('display') === 'none') {
 login_change.find('img').click()
 }
 
 const targetNode = $('.login-tab a:contains("密码登录")')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 拼多多商家
 pinduoduo_mms() {
 $('body').bind('DOMNodeInserted', (e) => {
 const password_section = $(e.target).find('.password-section')
 if (password_section.length > 0 && password_section.css('display') === 'none') {
 setTimeout(() => $('.login-tab').find('.tab-item.last-item')[0].click(), 100)
 }
 })
 },
 // 京麦
 jd_shop() {
 const targetNode = $('[data-tab-id="form"]')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 广东省统一身份认证平台
 gd_tyrz() {
 const process = (login_link) => {
 const nav_active = $('.gd-tabs-nav-active span').text()
 if (nav_active.includes('个人登录')) {
 login_link[0].click()
 }
 if (nav_active.includes('法人登录')) {
 if ($('.gd-tabs-pane .qr').length > 0)
 login_link[1].click()
 }
 }
 
 const targetNode = $('#app')[0]
 observe(targetNode, (mutations, observer) => {
 const login_link = $('a:contains(账号密码)')
 if (login_link.length > 0) {
 process(login_link)
 
 $('.gd-tabs-nav').on('click', () => {
 process(login_link)
 })
 // 停止观察
 observer.disconnect()
 }
 }, { subtree: true, attributeFilter: [] })
 },
 // 百姓网
 baixing() {
 const targetNode = $('[href="#mobile"]')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).attr('aria-expanded') != 'true') {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 生工
 sangon() {
 const targetNode = $('.ant-tabs-tab span:contains("密码登录")').map(function () {
 if ($(this).text() == "密码登录") return this
 })[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).closest('.ant-tabs-tab').hasClass('ant-tabs-tab-active')) {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 21 世纪教育
 '21cnjy'() {
 const targetNode = $('.login-method__tab--ac')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if ($(targetNode).css('display') != 'none') {
 targetNode.click()
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 },
 // 学校安全教育平台
 xueanquan() {
 $('body').bind('DOMNodeInserted', (e) => {
 const login_bto = $(e.target).find('.codelogin-bto')
 if (login_bto.length > 0) setTimeout(() => login_bto[0].click(), 100)
 })
 },
 // 极客邦科技
 geekbang() {
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).hasClass('page-sms-login'))
 $('a:contains("密码登录")')[0].click()
 })
 },
 // 中国大学 MOOC
 icourse163() {
 $('body').bind('DOMNodeInserted', (e) => {
 const login = $(e.target).find('.ux-login-set-scan-code_ft_back')
 if (login.length > 0) login[0].click()
 })
 },
 // 自如
 ziroom() {
 $('body').bind('DOMNodeInserted', (e) => {
 const login_accont = $(e.target).find('.ziroom-login-accont')
 if (login_accont.length > 0 && login_accont.css('display') === 'none')
 setTimeout(() => $('#swichAccontHook')[0].click(), 100)
 })
 },
 // 国家医保服务平台
 nhsa_fuwu() {
 $('body').bind('DOMNodeInserted', (e) => {
 if ($(e.target).find('.code-wrap').length > 0) {
 $('#iframe').on('load', () => {
 $('.other-login')[0].click()
 })
 }
 })
 },
 // NGA 玩家社区
 nga() {
 if (matchURL('nuke/account_copy.html?login')) {
 $('body').bind('DOMNodeInserted', (e) => {
 const btn = $(e.target).find('a:contains("使用密码登录")')
 if (btn.length > 0) setTimeout(() => btn[0].click(), 0)
 })
 }
 },
 // 蒲公英论坛
 ouryao() {
 if (matchURL('plugin.php')) {
 const targetNode = $('.login-content li:contains("账号登录")')[0]
 observe(targetNode, (mutations, observer) => {
 for (let mutation of mutations) {
 if (mutation.type === 'attributes') {
 if (!$(targetNode).hasClass('layui-this')) {
 setTimeout(() => targetNode.click(), 100)
 // 停止观察
 observer.disconnect()
 }
 }
 }
 })
 }
 },
 // 力扣中国
 leetcode_cn() {
 $('body').bind('DOMNodeInserted', (e) => {
 const btn = $(e.target).find('[data-cypress="sign-in-with-password"]')
 if (btn.length > 0) setTimeout(() => btn[0].click(), 0)
 })
 }
 }
 }
 
 function observe(targetNode, callback, extendConf) {
 if (targetNode) {
 console.log("targetNode", targetNode)
 targetNode.classList.add('temp')
 setTimeout(() => targetNode.classList.remove('temp'), 0)
 }
 
 // 观察器的配置（需要观察什么变动）
 const defaultConf = { childList: true, attributeFilter: ["class", "style"] }
 
 const conf = $.extend({}, defaultConf, extendConf)
 if (extendConf) console.log('observer conf', conf)
 if (callback) {
 // 创建一个观察器实例并传入回调函数
 const observer = new MutationObserver(callback)
 // 以上述配置开始观察目标节点
 if (targetNode) observer.observe(targetNode, conf)
 }
 }
 
 //判断网址是否匹配
 function matchURL(url) {
 return window.location.href.includes(url)
 }
 
 function setCookie(c_name, value, expireDays) {
 const expireDate = new Date()
 expireDate.setDate(expireDate.getDate() + expireDays)
 document.cookie = c_name + "=" + escape(value) + ((expireDays == null) ? "" : "expires=" + expireDate.toUTCString() + "path=/")
 }
 
 function getStorageData() {
 return GM_getValue('NoQRCodeLoginData')
 }
 
 function setStorageData(value) {
 return GM_setValue('NoQRCodeLoginData', value)
 }
 
 function deleteStorageData() {
 GM.deleteValue("NoQRCodeLoginData")
 }
 
 function checkSettingUpdate() {
 // 更新设置
 let needUpate = false
 let storageData = getStorageData()
 // console.log('默认数据', settingData)
 // console.log('用户数据', storageData)
 // 初始化数据
 if (!storageData) {
 needUpate = true
 storageData = settingData
 console.log('初始化用户配置', storageData)
 }
 
 // 更新数据
 if ($.isPlainObject(storageData)) {
 const settingDataKeys = Object.keys(settingData)
 const storageDataKeys = Object.keys(storageData)
 // 用户配置中比默认配置多的属性，意味着需要删除
 storageDataKeys.filter(key => !settingDataKeys.includes(key)).forEach(key => {
 needUpate = true
 console.log('删除配置', key, storageData[key])
 delete storageData[key]
 })
 
 for (const item in settingData) {
 const data = storageData[item]
 const defaultData = settingData[item]
 if (data) {
 // 比较 name 和 url
 const nameEquals = data.name == defaultData.name
 const urlEquals = data.url.toString() == defaultData.url.toString()
 if (!nameEquals) {
 needUpate = true
 console.log('更新名称：%s 为 %s', data.name, defaultData.name)
 data.name = defaultData.name
 }
 if (!urlEquals) {
 needUpate = true
 console.log('更新[%s]网址：%s 为 %s', data.name, data.url, defaultData.url)
 data.url = defaultData.url
 }
 } else {
 // 没有则新增
 needUpate = true
 storageData[item] = defaultData
 console.log('新增配置', item, storageData[item])
 }
 }
 }
 
 // 处理旧数据
 if (Array.isArray(storageData)) {
 needUpate = true
 let newStorageData = {}
 for (const item in settingData) {
 const itemName = settingData[item].name
 // 旧数据转换为新数据
 storageData.forEach(data => {
 if (data.name == itemName) {
 newStorageData[item] = data
 }
 })
 }
 storageData = newStorageData
 console.log('更新旧数据格式', storageData)
 }
 
 if (needUpate) setStorageData(storageData)
 return storageData
 }
 
 class Settings {
 constructor() {
 this.init()
 }
 mask = $('<div id="settingLayerMask"></div>')
 ele = $('<div id="settingLayer"></div>')
 init() {
 let self = this
 self.addContent()
 self.addGlobalStyle()
 self.mask.append(self.ele)
 $('body').append(self.mask)
 self.ele.click((e) => {
 self.bindClick(e)
 e.stopPropagation()
 })
 self.mask.click(() => self.hide())
 $(document).keyup((e) => {
 if (e.key === "Escape") self.hide()
 })
 }
 addContent() {
 // 各网站开关
 const itemList = $('<div id="itemlist"></div>')
 for (const key in storageData) {
 const item = storageData[key]
 const itemDiv = $('<section class="switch"></section>')
 const checkDiv = $('<div class="checkbox"></div>')
 if (item.enabled) checkDiv.addClass('on')
 itemDiv.append($('<span></span>').text(item.name)).append(checkDiv.append($('<input type="checkbox" />').attr('key', key).attr('name', item.name)).append($('<label class="switchLabel"></label>')))
 itemList.append(itemDiv)
 }
 // 按钮（反馈、保存等）
 const btnEle = $('<div id="btnEle"></div>')
 // Greasyfork 反馈按钮
 const feedbackGreasyforkEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/37988-%E6%8B%92%E7%BB%9D%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%99%BB%E5%BD%95">反馈 Greasy Fork</a>'))
 // GitHub 反馈按钮
 const feedbackGitHubEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://github.com/mmxxooyy/NoQRCodeLogin">反馈 GitHub</a>'))
 // 保存按钮
 const saveEle = $('<span id="noqrlogin-save" title="save &amp; close">保存并关闭</span>')
 // 关闭按钮
 const closeEle = $('<span id="noqrlogin-close" title="close 关闭"></span>')
 this.ele.append(itemList).append(btnEle.append($('<div class="btnEleLayer"></div>').append(feedbackGreasyforkEle).append(feedbackGitHubEle).append(saveEle))).append(closeEle)
 }
 show() {
 let self = this
 setTimeout(() => self.mask.css('display', 'flex'), 30)
 }
 hide() {
 let self = this
 setTimeout(() => self.mask.css('display', 'none'), 100)
 }
 addGlobalStyle() {
 var globalStyle = ' /* 开关按钮 */\n' +
 ' #itemlist {\n' +
 ' display: flex;\n' +
 ' display: -webkit-flex;\n' +
 ' align-content: center;\n' +
 ' align-items: center;\n' +
 ' justify-content: center;\n' +
 ' flex-flow: row wrap;\n' +
 ' }\n' +
 '\n' +
 ' section {\n' +
 ' float: left;\n' +
 ' width: 200px;\n' +
 ' padding: 6px 20px;\n' +
 ' }\n' +
 '\n' +
 ' .switch span {\n' +
 ' height: 30px;\n' +
 ' line-height: 32px;\n' +
 ' font-size: 16px;\n' +
 ' vertical-align: top;\n' +
 ' }\n' +
 '\n' +
 ' .switch .checkbox {\n' +
 ' float: right;\n' +
 ' padding-top: 4px;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox {\n' +
 ' position: relative;\n' +
 ' display: inline-block;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox:after,\n' +
 ' .checkbox:before {\n' +
 ' -webkit-font-feature-settings: normal;\n' +
 ' -moz-font-feature-settings: normal;\n' +
 ' font-feature-settings: normal;\n' +
 ' -webkit-font-kerning: auto;\n' +
 ' font-kerning: auto;\n' +
 ' -moz-font-language-override: normal;\n' +
 ' font-language-override: normal;\n' +
 ' font-stretch: normal;\n' +
 ' font-style: normal;\n' +
 ' font-synthesis: weight style;\n' +
 ' font-variant: normal;\n' +
 ' font-weight: normal;\n' +
 ' text-rendering: auto;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox label {\n' +
 ' width: 80px;\n' +
 ' height: 24px;\n' +
 ' background: #ccc;\n' +
 ' position: relative;\n' +
 ' display: inline-block;\n' +
 ' border-radius: 46px;\n' +
 ' -webkit-transition: 0.4s;\n' +
 ' transition: 0.4s;\n' +
 ' cursor: pointer;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox label:after {\n' +
 ' content: \'\';\n' +
 ' position: absolute;\n' +
 ' width: 50px;\n' +
 ' height: 50px;\n' +
 ' border-radius: 100%;\n' +
 ' left: 0;\n' +
 ' top: -5px;\n' +
 ' z-index: 2;\n' +
 ' background: #fff;\n' +
 ' box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n' +
 ' -webkit-transition: 0.4s;\n' +
 ' transition: 0.4s;\n' +
 ' cursor: pointer;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox input {\n' +
 ' display: none;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox.on label:after {\n' +
 ' left: 36px;\n' +
 ' }\n' +
 '\n' +
 ' .checkbox.on label {\n' +
 ' background: #4BD865;\n' +
 ' }\n' +
 '\n' +
 ' .switch .checkbox label {\n' +
 ' width: 60px;\n' +
 ' }\n' +
 '\n' +
 ' .switch .checkbox label:after {\n' +
 ' top: 0;\n' +
 ' width: 24px;\n' +
 ' height: 24px;\n' +
 ' }\n' +
 '\n' +
 ' /* 弹出层 */\n' +
 ' #settingLayerMask {\n' +
 ' display: none;\n' +
 ' justify-content: center;\n' +
 ' align-items: center;\n' +
 ' position: fixed;\n' +
 ' top: 0;\n' +
 ' right: 0;\n' +
 ' bottom: 0;\n' +
 ' left: 0;\n' +
 ' background-color: rgba(0, 0, 0, .5);\n' +
 ' z-index: 200000000;\n' +
 ' overflow: auto;\n' +
 ' font-family: arial, sans-serif;\n' +
 ' min-height: 100%;\n' +
 ' font-size: 16px;\n' +
 ' transition: 0.5s;\n' +
 ' opacity: 1;\n' +
 ' user-select: none;\n' +
 ' -moz-user-select: none;\n' +
 ' padding-bottom: 80px;\n' +
 ' box-sizing: border-box;\n' +
 ' }\n' +
 '\n' +
 ' #settingLayer {\n' +
 ' display: flex;\n' +
 ' flex-wrap: wrap;\n' +
 ' padding: 20px;\n' +
 ' margin: 0px 25px 50px 5px;\n' +
 ' background-color: #fff;\n' +
 ' border-radius: 4px;\n' +
 ' position: absolute;\n' +
 ' width: 60%;\n' +
 ' transition: 0.5s;\n' +
 ' }\n' +
 '\n' +
 '\n' +
 ' #btnEle {\n' +
 ' position: absolute;\n' +
 ' width: 100%;\n' +
 ' bottom: 4px;\n' +
 ' right: 0;\n' +
 ' background: #fff;\n' +
 ' border-radius: 4px;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle span {\n' +
 ' display: inline-block;\n' +
 ' background: #EFF4F8;\n' +
 ' border: 1px solid #3abdc1;\n' +
 ' margin: 12px auto 10px;\n' +
 ' color: #3abdc1;\n' +
 ' padding: 5px 10px;\n' +
 ' border-radius: 4px;\n' +
 ' cursor: pointer;\n' +
 ' outline: none;\n' +
 ' transition: 0.3s;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle a {\n' +
 ' color: #999;\n' +
 ' text-decoration: none;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle a:hover {\n' +
 ' text-decoration: underline;\n' +
 ' color: #ef8957;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle span.feedback:hover {\n' +
 ' border-color: #ef8957;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle span:not(.feedback):hover {\n' +
 ' background: #3ACBDD;\n' +
 ' color: #fff;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle .feedback {\n' +
 ' border-color: #aaa;\n' +
 ' }\n' +
 '\n' +
 ' #btnEle>div {\n' +
 ' width: 100%;\n' +
 ' margin-bottom: -100%;\n' +
 ' display: flex;\n' +
 ' justify-content: space-around;\n' +
 ' background: #EFF4F8;\n' +
 ' border-radius: 4px;\n' +
 ' }\n' +
 '\n' +
 ' /*close button*/\n' +
 ' #noqrlogin-close {\n' +
 ' background: white;\n' +
 ' color: #3ABDC1;\n' +
 ' line-height: 20px;\n' +
 ' text-align: center;\n' +
 ' height: 20px;\n' +
 ' width: 20px;\n' +
 ' font-size: 20px;\n' +
 ' padding: 10px;\n' +
 ' border: 3px solid #3ABDC1;\n' +
 ' border-radius: 50%;\n' +
 ' transition: .5s;\n' +
 ' top: -20px;\n' +
 ' right: -20px;\n' +
 ' position: absolute;\n' +
 ' cursor: pointer;\n' +
 ' }\n' +
 '\n' +
 ' #noqrlogin-close::before {\n' +
 ' content: \'\\2716\';\n' +
 ' }\n' +
 '\n' +
 ' #noqrlogin-close:hover {\n' +
 ' background: indianred;\n' +
 ' border-color: indianred;\n' +
 ' color: #fff;\n' +
 ' }';
 $("<style></style>").text(globalStyle).appendTo($("head"))
 }
 bindClick(e) {
 let self = this
 const targetClass = e.target.className
 const targetid = e.target.id
 
 // 关闭按钮
 if (targetid == 'noqrlogin-close') {
 self.hide()
 }
 
 // 保存设置
 if (targetid == 'noqrlogin-save') {
 $('section.switch input').each((i, o) => {
 const key = $(o).attr('key')
 const item = storageData[key]
 if (item) item.enabled = $(o.closest('.checkbox')).hasClass('on')
 })
 setStorageData(storageData)
 self.hide()
 }
 
 // 切换开关
 if (targetClass == 'switchLabel') {
 const switchEle = $(e.target).closest('.checkbox')
 if (switchEle.hasClass('on')) {
 switchEle.removeClass('on')
 } else {
 switchEle.addClass('on')
 }
 }
 }
 }
})()
