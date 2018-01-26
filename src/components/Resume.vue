<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-phone">
      <ul class="mdl-list list-skills">
        <li class="mdl-list__item mdl-list__item--three-line" v-for="skill in skills">
          <span class="mdl-list__item-primary-content">
            <span>{{ skill.name }}</span>
            <span class="mdl-list__item-text-body">{{ skill.info }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="mdl-cell mdl-cell--6-col mdl-cell--6-col-phone">
      <ul class="mdl-list list-studies">
        <li class="mdl-list__item mdl-list__item--three-line" v-for="experience in experiences">
          <span class="mdl-list__item-primary-content">
            <i class="mdl-list__item-title">{{ experience.year }}</i>
            <span>{{ experience.work }}</span>
            <span class="mdl-list__item-text-body">{{ experience.company }}</span>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--three-line" v-for="studie in studies">
          <span class="mdl-list__item-primary-content">
            <i class="mdl-list__item-title">{{ studie.year }}</i>
            <span>{{ studie.name }}</span>
            <span class="mdl-list__item-text-body">{{ studie.degree }} at {{ studie.school }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import studies from '../data/studies'
import skills from '../data/skills'
import experiences from '../data/experiences'
export default {
  data () {
    return {
      'studies': studies.studies,
      'skills': skills.skills,
      'experiences': experiences.experiences
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
