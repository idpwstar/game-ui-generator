import React from 'react';

export default function UiPreview({
  uiRef, userName, characterQuote, stamina, producerRank, profileImg,
  topTitle, positionTag1, positionTag2,
  vocal, dance, visual, charm,
  themeColor,
  hearts, gold, diamond, level,
  fontName 
}) {
  
  // html2canvas가 100% 오작동 없이 파싱하는 단색 컬러 맵
  const themeStyles = {
    pink: { bgHex: '#FBCFE8', topBarBg: '#F472B6', text: 'text-pink-600', border: 'border-pink-300', subText: 'text-purple-400', badge: 'from-pink-500 to-rose-400', navActive: 'from-pink-600 to-pink-700' },
    purple: { bgHex: '#E9D5FF', topBarBg: '#C084FC', text: 'text-purple-600', border: 'border-purple-300', subText: 'text-indigo-400', badge: 'from-purple-600 to-indigo-500', navActive: 'from-purple-600 to-purple-700' },
    green: { bgHex: '#A7F3D0', topBarBg: '#34D399', text: 'text-emerald-700', border: 'border-emerald-300', subText: 'text-teal-500', badge: 'from-emerald-600 to-teal-500', navActive: 'from-emerald-600 to-emerald-700' },
    red: { bgHex: '#FECDD3', topBarBg: '#FB7185', text: 'text-rose-600', border: 'border-rose-300', subText: 'text-orange-400', badge: 'from-rose-500 to-orange-400', navActive: 'from-rose-600 to-rose-700' },
    blue: { bgHex: '#BAE6FD', topBarBg: '#38BDF8', text: 'text-sky-600', border: 'border-sky-300', subText: 'text-blue-400', badge: 'from-sky-600 to-blue-500', navActive: 'from-sky-600 to-sky-700' },
    yellow: { bgHex: '#FEF08A', topBarBg: '#FACC15', text: 'text-amber-700', border: 'border-amber-300', subText: 'text-amber-500', badge: 'from-amber-500 to-yellow-500', navActive: 'from-amber-500 to-amber-600' }
  };

  const currentTheme = themeStyles[themeColor] || themeStyles.pink;

  const renderHearts = () => {
    let heartString = '';
    for (let i = 0; i < 5; i++) {
      heartString += i < hearts ? '💖' : '♡';
    }
    return heartString;
  };

  const formattedTitle = (topTitle || 'ARCH').trim().toUpperCase();
  const chosenFont = fontName || '"pretendard", sans-serif';

  return (
    <div 
      className="w-full lg:w-[1080px] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white text-slate-800 select-none flex flex-col transition-all duration-300" 
      style={{ 
        fontFamily: chosenFont,
        backgroundColor: currentTheme.bgHex,
        transform: 'translateZ(0)'
      }}
      ref={uiRef}
    >
      {/* [🔥 안전 장치 추가]
        상단바 영역이 캡처 엔진 돔 복사 시 하얗게 유실되는 현상을 막기 위해 
        가장 밑바닥에 완전 불투명한 상단바 전용 단색 배경 지지대를 absolute로 미리 깔아둡니다.
      */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 z-0 pointer-events-none"
        style={{ backgroundColor: currentTheme.topBarBg }}
      />

      {/* 상단바 콘텐츠 레이어 */}
      <div className="w-full h-12 relative border-b border-white/20 z-20 block">
        {/* 좌측 타이틀 (절대 위치) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center">
          <span className="text-white font-black text-base tracking-wider drop-shadow-sm">★ {formattedTitle}</span>
        </div>

        {/* 우측 인포 스택들 */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 text-sm font-extrabold text-white">
          <div className="tracking-wide text-base drop-shadow-sm">{renderHearts()}</div>
          
          <div className="bg-white/20 text-white px-3.5 py-1 rounded-full flex items-center gap-1 shadow-inner font-black min-w-[80px] justify-center">
            <span>🪙</span> <span>{gold || '0'}</span>
          </div>
          
          <div className="bg-white/20 text-white px-3.5 py-1 rounded-full flex items-center gap-1 shadow-inner font-black min-w-[75px] justify-center">
            <span>💎</span> <span>{diamond}</span>
          </div>
          
          <div className="bg-white text-slate-800 px-3 py-0.5 rounded text-[11px] font-black shadow-sm">
            Lv.{level}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 본문 */}
      <div className="flex-1 p-5 flex gap-5 overflow-hidden items-stretch relative z-10">
        
        {/* 좌측 공책 프로필 카드 영역 */}
        <div 
          className="w-[360px] bg-white rounded-2xl border border-white shadow-xl relative p-5 flex flex-col gap-4 bg-[size:15px_15px]"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)'
          }}
        >
          {/* 바인더 링 디테일 */}
          <div className="absolute -left-2.5 top-5 bottom-5 flex flex-col justify-between w-4 pointer-events-none z-10">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-4 h-4 bg-gradient-to-br from-white to-slate-100 rounded-full border ${currentTheme.border} shadow-inner`} />
            ))}
          </div>

          <div className="ml-3">
            <span className={`bg-gradient-to-r ${currentTheme.badge} text-white text-[11px] font-black px-3 py-1 rounded-full shadow-sm tracking-wide inline-block whitespace-nowrap`}>
              ✦ 프로필 카드
            </span>
          </div>

          <div className="ml-3">
            <h1 className={`text-3xl font-black ${currentTheme.text} tracking-tight`}>{userName || '이름'}</h1>
            <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{userName || '이름'} · {formattedTitle}</p>
          </div>

          {/* [🔥 배지 깨짐 전면 해결 구역]
            태그 텍스트가 강제로 줄바꿈되거나 폭이 찌그러지지 않도록 
            whitespace-nowrap과 flex-shrink-0 속성을 명확히 심고, 가로로 꽉 고정해 줍니다.
          */}
          <div className="ml-3 flex flex-row flex-wrap items-center gap-2 text-[11px] font-black">
            {positionTag1 && (
              <span className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-3 py-1 rounded-md border border-purple-200 shadow-sm whitespace-nowrap flex-shrink-0 min-w-[55px] h-6 text-center">
                {positionTag1}
              </span>
            )}
            {positionTag2 && (
              <span className="inline-flex items-center justify-center bg-amber-100 text-amber-700 px-3 py-1 rounded-md border border-amber-200 shadow-sm whitespace-nowrap flex-shrink-0 min-w-[45px] h-6 text-center">
                {positionTag2}
              </span>
            )}
          </div>

          {/* 세부 능력치 스택 */}
          <div className="ml-3 space-y-2 flex-1 text-sm">
            <span className={`block font-black ${currentTheme.text} opacity-90 mb-1 text-[11px] uppercase tracking-wider`}>📊 STATUS</span>
            
            {[
              { label: '🎤 보컬', val: vocal, color: 'from-pink-400 to-rose-400' },
              { label: '💃 댄스', val: dance, color: 'from-purple-400 to-indigo-400' },
              { label: '✨ 비주얼', val: visual, color: 'from-amber-400 to-yellow-400' },
              { label: '💖 매력', val: charm, color: 'from-sky-400 to-cyan-400' }
            ].map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <div className="flex justify-between font-black text-slate-700 text-[11px] px-0.5">
                  <span>{stat.label}</span>
                  <span className={`${currentTheme.text}`}>{stat.val}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full border border-slate-200/80 overflow-hidden shadow-inner">
                  <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full`} style={{ width: `${stat.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* 친밀도 / 경험치 바 */}
          <div className="ml-3 pt-3 border-t border-slate-200/60">
            <div className={`flex justify-between text-[12px] font-black ${currentTheme.text} mb-1`}>
              <span>💕 친밀도 Lv.{producerRank}</span>
              <span className="text-slate-500 font-extrabold">{stamina}/100 EXP</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300" 
                style={{ width: `${stamina}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* 우측 메인 일러스트 영역 */}
        <div className="flex-1 relative flex flex-col justify-end items-center p-2 h-full">
          <div className="absolute top-2 bottom-28 w-[390px] h-[390px] rounded-3xl overflow-hidden bg-white/30 border border-white/20 shadow-inner flex items-center justify-center">
            {profileImg && (
              <img 
                src={profileImg} 
                alt="Character" 
                className="w-full h-full object-cover object-top transform scale-105" 
                crossOrigin="anonymous"
              />
            )}
          </div>

          {/* 대사창 */}
          <div className="w-full bg-white border-2 border-white/80 rounded-2xl px-5 py-4 shadow-2xl z-10 min-h-[90px] flex flex-col justify-center relative mb-1">
            <span className={`text-[12px] font-black ${currentTheme.text} mb-1 block tracking-wide`}>
              {userName || '이름'} ▶
            </span>
            <p className="text-sm font-black text-slate-800 leading-relaxed break-keep pr-8 tracking-wide">
              {characterQuote}
            </p>
            <span className={`absolute bottom-3 right-4 text-[10px] font-black ${currentTheme.text} opacity-80 animate-pulse tracking-tighter`}>TAP ▼</span>
          </div>
        </div>
      </div>

      {/* 하단 글로벌 네비게이션 액션 바 */}
      <div className="w-full h-14 bg-slate-900 border-t border-white/10 flex text-xs font-black text-slate-400 relative z-20">
        {[
          { icon: '💬', name: '대화' },
          { icon: '💪', name: '훈련' },
          { icon: '🎤', name: '라이브' },
          { icon: '🎁', name: '만남' }
        ].map((menu, idx) => (
          <div 
            key={idx} 
            className={`flex-1 flex flex-col justify-center items-center gap-0.5 cursor-pointer hover:bg-white/10 transition-all ${
              idx === 0 ? `bg-gradient-to-b ${currentTheme.navActive} text-white shadow-inner` : ''
            }`}
          >
            <span className="text-lg">{menu.icon}</span>
            <span className="text-[11px] tracking-wide font-black">{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}