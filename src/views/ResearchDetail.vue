<template>
  <div class="research-detail">
    <div v-if="center" class="detail-container">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span> 返回列表
      </button>

      <div class="hero-section">
        <img :src="center.image" :alt="center.title" class="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{{ center.title }}</h1>
          <p class="hero-subtitle">{{ center.subtitle }}</p>
          <div class="hero-tags">
            <span v-for="(tag, index) in center.tags" :key="index" class="hero-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="main-content">
          <section class="section">
            <h2 class="section-title">中心简介</h2>
            <p class="section-text">{{ center.description }}</p>
          </section>

          <section class="section">
            <h2 class="section-title">研究方向</h2>
            <ul class="research-areas-list">
              <li v-for="(area, index) in center.researchAreas" :key="index" class="area-item">
                <span class="area-icon">◆</span>
                {{ area }}
              </li>
            </ul>
          </section>

          <section class="section">
            <h2 class="section-title">主要成果</h2>
            <div class="achievements-grid">
              <div v-for="(achievement, index) in center.achievements" :key="index" class="achievement-card">
                <div class="achievement-icon">🏆</div>
                <p>{{ achievement }}</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">研究设施</h2>
            <div class="facilities-grid">
              <div v-for="(facility, index) in center.facilities" :key="index" class="facility-card">
                <div class="facility-icon">🔬</div>
                <p>{{ facility }}</p>
              </div>
            </div>
          </section>
        </div>

        <aside class="sidebar">
          <div class="info-card">
            <h3 class="info-title">基本信息</h3>
            <div class="info-list">
              <div class="info-item">
                <span class="info-label">中心主任</span>
                <span class="info-value">{{ center.director }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">成立时间</span>
                <span class="info-value">{{ center.established }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">团队成员</span>
                <span class="info-value">{{ center.members }} 人</span>
              </div>
              <div class="info-item">
                <span class="info-label">在研项目</span>
                <span class="info-value">{{ center.projects }} 项</span>
              </div>
            </div>
          </div>

          <div class="contact-card">
            <h3 class="contact-title">联系方式</h3>
            <div class="contact-list">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span class="contact-text">{{ center.contact }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span class="contact-text">{{ center.address }}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>未找到该研究中心</h2>
      <button class="back-btn" @click="goBack">返回列表</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { researchCenters } from '../data/research.js'

const route = useRoute()
const router = useRouter()
const center = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  center.value = researchCenters.find(c => c.id === id)
})

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.research-detail {
  min-height: 100vh;
  background: #f7fafc;
}

.detail-container {
  max-width: 1400px;
  margin: 0 auto;
}

.back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  background: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2d3748;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.back-icon {
  font-size: 18px;
}

.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.hero-content {
  position: absolute;
  bottom: 60px;
  left: 60px;
  right: 60px;
  color: white;
  z-index: 10;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 20px;
  opacity: 0.95;
  font-style: italic;
}

.hero-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-tag {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  padding: 60px;
  max-width: 1400px;
  margin: 0 auto;
}

.main-content {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.section {
  margin-bottom: 50px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 3px solid #667eea;
  display: inline-block;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: #4a5568;
}

.research-areas-list {
  list-style: none;
}

.area-item {
  padding: 16px;
  margin-bottom: 12px;
  background: #f7fafc;
  border-radius: 8px;
  font-size: 16px;
  color: #2d3748;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.area-item:hover {
  background: #edf2f7;
  transform: translateX(8px);
}

.area-icon {
  color: #667eea;
  font-size: 14px;
}

.achievements-grid {
  display: grid;
  gap: 20px;
}

.achievement-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  transition: transform 0.3s ease;
}

.achievement-card:hover {
  transform: translateX(8px);
}

.achievement-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.achievement-card p {
  font-size: 15px;
  line-height: 1.6;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.facility-card {
  background: #f7fafc;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.facility-card:hover {
  background: white;
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.facility-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.facility-card p {
  font-size: 14px;
  color: #2d3748;
  font-weight: 500;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card, .contact-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.info-title, .contact-title {
  font-size: 22px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e2e8f0;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-label {
  font-size: 13px;
  color: #718096;
  font-weight: 500;
}

.info-value {
  font-size: 18px;
  color: #2d3748;
  font-weight: 600;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f7fafc;
  border-radius: 8px;
}

.contact-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.contact-text {
  font-size: 14px;
  color: #2d3748;
  word-break: break-all;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 24px;
}

.not-found h2 {
  font-size: 32px;
  color: #2d3748;
}

@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .hero-content {
    left: 30px;
    right: 30px;
    bottom: 30px;
  }

  .hero-title {
    font-size: 36px;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .back-btn {
    top: 10px;
    left: 10px;
    padding: 10px 20px;
    font-size: 14px;
  }

  .hero-section {
    height: 350px;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .main-content {
    padding: 24px;
  }

  .section-title {
    font-size: 22px;
  }
}
</style>
