# Yujin & Kihuun Wedding Website

장식용 빨간선을 모두 제거한 GitHub Pages 업로드용 수정본입니다.

## 반영 사항
- 페이지에 떠 있던 빨간 가로선, 세로선 제거
- 제목 주변의 장식용 빨간선 제거
- 관련 HTML 요소와 CSS 효과 제거
- 사진, LP 음악 버튼, 모바일 여백과 기존 기능 유지

## GitHub 업데이트
ZIP 압축을 푼 뒤 내부 파일 전체를 기존 저장소에 업로드하고,
같은 이름의 파일은 덮어쓰면 됩니다.

## 2026-07-23 horse width deployment fix
- CSS file renamed to `style-fullwidth-v2.css` to avoid stale/failed `style.css` replacement.
- `index.html` now loads the new filename with a version query.
- Upload every file from this ZIP to the repository root.
- Delete the old `style.css` after upload if desired; the website no longer references it.
