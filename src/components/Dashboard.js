// components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>크리에이터 대시보드</h1>
      <div className="quick-stats">
        <div>총 수익: ₩XXX</div>
        <div>음악 사용 횟수: XXX</div>
        <div>인기 트랙: "트랙 이름"</div>
      </div>
      {/* 여기에 더 많은 대시보드 위젯을 추가하세요 */}
    </div>
  );
}

export default Dashboard;