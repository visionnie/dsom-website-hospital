<template>
  <div class="research-list">
    <header class="header">
      <div class="header-content">
        <h1>研究中心</h1>
        <p class="subtitle">Research Centers</p>
      </div>
    </header>

    <div class="container">
      <div class="grid">
        <div
          v-for="center in researchCenters"
          :key="center.id"
          class="card"
        >
          <div class="card-image">
            <img :src="center.image" :alt="center.title">
            <div class="card-overlay"></div>
          </div>

          <div class="card-content">
            <h2 class="card-title">{{ center.title }}</h2>
            <p class="card-subtitle">{{ center.subtitle }}</p>
            <p class="card-description">{{ center.description }}</p>

            <div class="card-tags">
              <span
                v-for="(tag, index) in center.tags"
                :key="index"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

            <div class="card-footer">
              <div class="card-stats">
                <div class="stat">
                  <span class="stat-label">成员</span>
                  <span class="stat-value">{{ center.members }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">项目</span>
                  <span class="stat-value">{{ center.projects }}</span>
                </div>
              </div>

              <button
                class="view-btn"
                @click="goToDetail(center.id)"
              >
                点击查看
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { researchCenters } from '../data/research.js'

const router = useRouter()

const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}
</script>

<style scoped>
.research-list {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-bottom: 60px;
}

.header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px 20px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 18px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 1px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}

.card-content {
  padding: 24px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
}

.card-subtitle {
  font-size: 14px;
  color: #718096;
  margin-bottom: 12px;
  font-style: italic;
}

.card-description {
  font-size: 15px;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.card-stats {
  display: flex;
  gap: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-label {
  font-size: 12px;
  color: #a0aec0;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #667eea;
}

.view-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.view-btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .header-content h1 {
    font-size: 32px;
  }

  .card-footer {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .view-btn {
    width: 100%;
  }
}
</style>
