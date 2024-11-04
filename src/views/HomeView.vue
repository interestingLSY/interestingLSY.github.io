<script setup lang="ts">
import { ref } from "vue"
import { awards } from "@/data/awards"
import { publications } from "@/data/publications"
import { projects } from "@/data/projects"

</script>

<template>
  <v-row class="mt-4" justify="center" id="card-overview">
    <v-col cols="6" md="3" align-self="center">
      <v-row justify="center">
        <div style="width: 80%">
          <v-img
            src="/photo.jpg"
            class="d-none d-md-block w">
          </v-img>
        </div>
        <v-avatar
          size="150"
          class="d-md-none"
          style="">
          <v-img
            src="/photo.jpg">
          </v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" align-self="center">
      <v-card variant="text">
        <v-card-item>
          <v-card-title class="pb-2 pt-2">
            <h2 style="text-align: center;">Shengyu Liu | 刘胜与</h2>
          </v-card-title>
          <v-card-text class="mt-4">
            <p style="margin-top: 14px;">
              I am currently a senior student in the <a href="https://cfcs.pku.edu.cn/english/research/turing_program/introduction1/index.htm">Turing Class</a> at <a href="https://eecs.pku.edu.cn/en/">the School of EECS</a>, <a href="https://english.pku.edu.cn/">Peking University (PKU)</a>, enrolled since September 2021.
            </p>
            <p style="margin-top: 8px">
              Under the advisement of Prof. <a href="https://xinjin.github.io/index.html">Xin Jin</a>, my research focuses on <b>Machine Learning Systems (MLSys)</b>, <b>Machine Learning Compilers</b>, and <b>Distributed Systems</b>.
            </p>
            <p style="margin-top: 8px">
              I was also the <b>team leader</b> of the Peking University Supercomputing Team, and we won the <b>First Place</b> at the 10th ASC and the <b>Second Place</b> at SC23 (both are top-tier Supercomputing competitions in the world).
            </p>
            <div class="mt-6" style="text-align: center">
              <p style="font-size: 15px;">
                Email: <a href="mailto:shengyu.liu@stu.pku.edu.cn">shengyu.liu@stu.pku.edu.cn</a> <br />
              </p>
              <a href="https://scholar.google.com/citations?hl=en&user=tkx4NIUAAAAJ">Google Scholar</a> / 
              <a href="https://github.com/interestingLSY">GitHub</a> / 
              <a href="/cv-shengyuliu.pdf">My CV</a> /
              <a href="/wechat-qrcode.png">WeChat</a>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-divider class="mt-10 mb-4"></v-divider>

  <!-- <v-card variant="text" class="mt-4" id="card-news">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">News</h2>
      </v-card-title>
    </v-card-item>
  </v-card> -->

  <v-card variant="text" class="mt-4" id="card-publications">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Publications</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="publication in publications" class="mt-4">
          <v-col cols="12" md="3">
            <v-img :src="publication.img_path" style="max-width: 280px;"></v-img>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9">
            <a :href="publication.link" target="_blank" v-html="publication.title" style="font-size: 17px"></a>
            <p v-html="publication.authors" style="font-size: 14px"></p>
            <p v-html="publication.description" style="font-size: 14px; color: #999; margin-top: 5px;"></p>
            <p v-html="publication.time" style="font-size: 14px; color: #999; margin-top: 5px;"></p>
            <p v-html="publication.submit_status" style="font-size: 14px; color: #555; margin-top: 5px;"></p>
          </v-col>
        </v-row>
        <p style="color: #888; font-size: 14px; margin-top: 20px;">*: Equal contribution</p>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-awards">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Awards</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-list>
          <v-list-item v-for="award in awards" :key="award.name" class="mt-1">
            <template v-slot:prepend>
              <v-icon icon="mdi-circle" size="10"></v-icon>
            </template>
            <v-list-item-title class="text-wrap">
              <h3 style="font-size: 17px" v-html="award.name"></h3>
            </v-list-item-title>
            <p style="font-size: 13px; white-space: normal; text-wrap: wrap; color: #999" v-html="award.year + (award.description ? ', ' : '') + award.description"></p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-2" id="card-projects">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Projects</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row v-for="project in projects" class="mt-1">
          <v-col>
            <p><a :href="project.link" target="_blank" v-html="project.name" style="font-size: 17px"></a></p>
            <p v-html="project.description" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
            <p v-html="project.time" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card-item>
  </v-card>

  <!-- <v-card variant="text" class="mt-4" id="card-bio">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">Bio</h2>

      </v-card-title>
    </v-card-item>
  </v-card> -->

  <v-divider class="mt-10"></v-divider>
  <v-row class="mt-1" justify="center">
    <v-col align-self="center">
      <p style="text-align: center; font-size: 12px; color: #aaa; line-height: 1.5;">
        <v-icon icon="mdi-xml"></v-icon> with <v-icon icon="mdi-heart"></v-icon> by Shengyu Liu <br />
        Built on <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a> and <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a> <br />
        Feel free to steal this website's source code at <a href="https://github.com/interestingLSY/interestingLSY.github.io" target="_blank">GitHub</a>
      </p>
      <p style="text-align: center;" class="mt-2">
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finterestinglsy.github.io&count_bg=%2388eeff&title_bg=%23DDDDDD&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
      </p>
    </v-col>
  </v-row>
</template>
