<template>
<div>
    <mu-text-field hintText="提示文字" errorText="这是必填项"/><br/>
    <mu-text-field label="标签文字" errorText="请输入数字" hintText="提示文字"/><br/>
    <mu-text-field label="浮动标签" errorText="出错！出错！" labelFloat/><br/>
    <mu-text-field hintText="多行输入" errorText="不能一个字都不输入哦" multiLine :rows="3"/><br/>
    <mu-text-field label="自定义错误颜色" errorText="又输错了，笨死了！" errorColor="orange" labelFloat/><br/>
</div>
</template>
