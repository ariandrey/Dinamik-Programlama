function minProductionTime(processingTime, transitionCost) {
  const n = processingTime.length; // iş sayısı
  const m = processingTime[0].length; // makine sayısı

  // iş'e i, makine j için minimum süreyi toplayacak
  const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));

  // İlk iş için geçiş maliyeti yok
  for (let j = 0; j < m; j++) {
    dp[0][j] = processingTime[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < m; k++) {
        const transition = transitionCost[k][j];
        const totalTime = dp[i - 1][k] + transition + processingTime[i][j];
        dp[i][j] = Math.min(dp[i][j], totalTime);
      }
    }
  }

  // SON işin EN AZ süresini buldurtacak, tamamlanma sürelerinin en küçüğünü verir
  return Math.min(...dp[n - 1]); 
}

// Her bir işin verileri/değerleri
const processingTime = [
  [7, 5, 9],
  [6, 4, 8],
  [5, 3, 7]
];

// Sırasıyla 3 makineyi dolaşır*
const transitionCost = [
  [0, 3, 5],
  [2, 0, 4],
  [4, 1, 0]
];

console.log("Minimum üretim süresi:", minProductionTime(processingTime, transitionCost));