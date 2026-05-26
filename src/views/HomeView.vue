<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { awards } from "@/data/awards"
import { publications } from "@/data/publications"
import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences"

const { locale } = useI18n()
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
            <p style="margin-top: 14px;" v-html="$t('home.bio')">
            </p>
            <div class="mt-6" style="text-align: center">
              <p style="font-size: 15px;">
                {{ $t('home.email') }}: <a href="mailto:shengyuliu@deepseek.com">shengyuliu@deepseek.com</a><br />
              </p>
              <a href="https://scholar.google.com/citations?hl=en&user=tkx4NIUAAAAJ">{{ $t('home.googleScholar') }}</a> /
              <a href="https://github.com/interestingLSY">GitHub</a> /
              <a href="/cv-shengyuliu.pdf">{{ $t('home.cv') }}</a> /
              <a href="/wechat-qrcode.png">{{ $t('home.wechat') }}</a> <br />
              <a href="/wechat-offical-account-qrcode.jpg">{{ $t('home.wechatOfficial') }}</a>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-divider class="mt-10 mb-4"></v-divider>

  <v-card variant="text" class="mt-4" id="card-publications">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.experience') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="experience in experiences" class="mt-4">
          <v-col cols="12" md="3" class="d-flex align-center justify-center">
            <v-img :src="experience.img_path" style="max-width: 280px;"></v-img>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9">
            <a :href="experience.link[locale] || experience.link.en" target="_blank" v-html="experience.title[locale] || experience.title.en" style="font-size: 24px; color: #111"></a>
            <p v-html="experience.time[locale] || experience.time.en" style="font-size: 14px; color: #555; margin-top: 5px;"></p>
            <p v-html="experience.description[locale] || experience.description.en" style="font-size: 16px; color: #555; margin-top: 5px;"></p>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-publications">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.publications') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="publication in publications" class="mt-4">
          <v-col cols="12" md="3">
            <v-img :src="publication.img_path" style="max-width: 280px; margin-top: 10px"></v-img>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9">
            <a :href="publication.link" target="_blank" v-html="publication.title" style="font-size: 17px"></a>
            <p v-html="publication.authors" style="font-size: 14px"></p>
            <p v-html="publication.description[locale] || publication.description.en" style="font-size: 14px; color: #999; margin-top: 5px;"></p>
            <p v-html="publication.time" style="font-size: 14px; color: #999; margin-top: 5px;"></p>
            <p v-html="publication.submit_status[locale] || publication.submit_status.en" style="font-size: 14px; color: #555; margin-top: 5px;"></p>
          </v-col>
        </v-row>
        <p style="color: #888; font-size: 14px; margin-top: 20px;">{{ $t('sections.equalContribution') }}</p>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-4" id="card-awards">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.awards') }}</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-list>
          <v-list-item v-for="award in awards" :key="award.name.en" class="mt-1">
            <template v-slot:prepend>
              <v-icon icon="mdi-circle" size="10"></v-icon>
            </template>
            <v-list-item-title class="text-wrap">
              <h3 style="font-size: 17px" v-html="award.name[locale] || award.name.en"></h3>
            </v-list-item-title>
            <p style="font-size: 13px; white-space: normal; text-wrap: wrap; color: #999" v-html="award.year + (award.description[locale] || award.description.en ? ', ' : '') + (award.description[locale] || award.description.en)"></p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-card variant="text" class="mt-2" id="card-projects">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.projects') }}</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row v-for="project in projects" class="mt-1">
          <v-col>
            <p><a :href="project.link" target="_blank" v-html="project.name[locale] || project.name.en" style="font-size: 17px"></a></p>
            <p v-html="project.description[locale] || project.description.en" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
            <p v-html="project.time" style="font-size: 14px; color: #999; margin-top: 2px;"></p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-divider class="mt-10"></v-divider>
  <v-row class="mt-1" justify="center">
    <v-col align-self="center">
      <p style="text-align: center; font-size: 12px; color: #aaa; line-height: 1.5;">
        <v-icon icon="mdi-xml"></v-icon> with <v-icon icon="mdi-heart"></v-icon> by Shengyu Liu and DeepSeek-V4 <br />
        <span v-html="$t('footer.builtWith')"></span> <br />
        <span v-html="$t('footer.sourceCode')"></span>
      </p>
      <p style="text-align: center;" class="mt-2">
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finterestinglsy.github.io&count_bg=%2388eeff&title_bg=%23DDDDDD&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
      </p>
    </v-col>
  </v-row>
</template>
