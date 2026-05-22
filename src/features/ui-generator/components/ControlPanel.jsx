import React from 'react';

export default function ControlPanel({
  userName, setUserName,
  characterQuote, setCharacterQuote,
  stamina, setStamina,
  producerRank, setProducerRank,
  handleImageUpload,
  downloadToImage,
  
  topTitle, setTopTitle,
  positionTag1, setPositionTag1,
  positionTag2, setPositionTag2,
  
  vocal, setVocal,
  dance, setDance,
  visual, setVisual,
  charm, setCharm,
  
  themeColor, setThemeColor,
  hearts, setHearts,
  gold, setGold,
  diamond, setDiamond,
  level, setLevel
}) {
  const themes = [
    { id: 'pink', name: '핑크', bg: 'bg-pink-500' },
    { id: 'purple', name: '보라', bg: 'bg-purple-500' },
    { id: 'green', name: '초록', bg: 'bg-emerald-500' },
    { id: 'red', name: '빨강', bg: 'bg-rose-500' },
    { id: 'blue', name: '파랑', bg: 'bg-sky-500' },
    { id: 'yellow', name: '노랑', bg: 'bg-amber-400' },
  ];

  return (
    <div className="w-full xl:w-[380px] bg-slate-800 p-6 rounded-2xl shadow-xl flex flex-col gap-5 text-slate-100 max-h-[90vh] overflow-y-auto shrink-0 border border-slate-700 custom-scrollbar">
      <h2 className="text-xl font-bold border-b border-slate-700 pb-2 text-indigo-400 flex items-center gap-2">⚙️ 설정 컴포넌트</h2>
      
      {/* 1. 테마 색상 고르기 */}
      <div>
        <label className="block text-xs font-bold mb-2 text-slate-300">🎨 테마 색상 팔레트</label>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setThemeColor(t.id)}
              className={`flex items-center gap-1.5 p-2 rounded-xl border text-xs font-bold transition-all transform active:scale-95 ${
                themeColor === t.id 
                  ? 'border-white bg-slate-700 ring-2 ring-indigo-500 scale-105' 
                  : 'border-slate-700 bg-slate-900/60 hover:bg-slate-700/50 text-slate-400'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${t.bg}`} />
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. 기본 카드 정보 및 타이틀 설정 */}
      <div className="space-y-3 border-t border-slate-700/60 pt-3">
        <label className="block text-xs font-bold text-indigo-300">👤 기본 카드 정보</label>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">유저 이름</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">상단 소속 타이틀</label>
            <input type="text" value={topTitle} onChange={(e) => setTopTitle(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" placeholder="예: ARCH" />
          </div>
        </div>
        
        {/* 포지션 커스텀 입력 창 */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">포지션 태그 1</label>
            <input type="text" value={positionTag1} onChange={(e) => setPositionTag1(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" placeholder="예: 메인보컬" />
          </div>
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">포지션 태그 2</label>
            <input type="text" value={positionTag2} onChange={(e) => setPositionTag2(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" placeholder="예: 센터" />
          </div>
        </div>

        <div>
          <label className="block text-[11px] mb-1 text-slate-400">캐릭터 대사</label>
          <textarea value={characterQuote} onChange={(e) => setCharacterQuote(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs h-16 text-white resize-none border border-slate-700 focus:outline-none focus:border-indigo-500 leading-normal" />
        </div>
        <div>
          <label className="block text-[11px] mb-1 text-slate-400">프로필 이미지 업로드</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer" />
        </div>
      </div>

      {/* 3. 재화 조절 세션 */}
      <div className="space-y-3 border-t border-slate-700/60 pt-3">
        <label className="block text-xs font-bold text-yellow-400">🪙 상단 게임 재화 설정</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">하트 개수 (0~5)</label>
            <input type="number" min="0" max="5" value={hearts} onChange={(e) => setHearts(Math.min(5, Math.max(0, Number(e.target.value))))} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">계정 레벨 (Lv)</label>
            <input type="number" value={level} onChange={(e) => setLevel(Number(e.target.value))} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">골드 (수치/텍스트)</label>
            <input type="text" value={gold} onChange={(e) => setGold(e.target.value)} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-[11px] mb-1 text-slate-400">다이아 수량</label>
            <input type="number" value={diamond} onChange={(e) => setDiamond(Number(e.target.value))} className="w-full bg-slate-900 p-2 rounded-lg text-xs text-white border border-slate-700 focus:outline-none focus:border-indigo-500" />
          </div>
        </div>
      </div>

      {/* 4. 능력치 및 친밀도 레벨 슬라이더 조절 세션 */}
      <div className="space-y-2 border-t border-slate-700/60 pt-3">
        <label className="block text-xs font-bold text-rose-400">📊 카드 세부 능력치 & 친밀도 조절</label>
        
        {[
          { label: '🎤 보컬 스탯', val: vocal, set: setVocal, color: 'accent-pink-500', max: 100 },
          { label: '💃 댄스 스탯', val: dance, set: setDance, color: 'accent-purple-500', max: 100 },
          { label: '✨ 비주얼 스탯', val: visual, set: setVisual, color: 'accent-amber-400', max: 100 },
          { label: '💖 매력 스탯', val: charm, set: setCharm, color: 'accent-sky-500', max: 100 },
          { label: '💕 친밀도 레벨 (Lv)', val: producerRank, set: setProducerRank, color: 'accent-rose-500', max: 100 },
          { label: '📈 친밀도 EXP 경험치', val: stamina, set: setStamina, color: 'accent-indigo-500', max: 100 }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/40 p-2 rounded-lg border border-slate-700/40">
            <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-0.5">
              <span>{stat.label}</span>
              <span className="font-bold text-white">{stat.val} {stat.label.includes('레벨') ? 'Lv' : 'pt'}</span>
            </div>
            <input type="range" min="1" max={stat.max} value={stat.val} onChange={(e) => stat.set(Number(e.target.value))} className={`w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer ${stat.color}`} />
          </div>
        ))}
      </div>

      <button onClick={downloadToImage} className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-xl transition shadow-lg text-sm">
        📸 이미지 저장하기
      </button>
    </div>
  );
}