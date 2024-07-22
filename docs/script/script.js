console.clear();

// 한글/영어 단어 선택
function changevoca() {
	$(".voca-en").click(function () {
		let change = $(".voca-en").hasClass("voca-en");
		if (change) {
			$(".voca-en").removeClass("voca-en");
			$(".voca-ko").addClass("voca-en");
		} else {
		}
	});
	$(".voca-ko").click(function () {
		let change = $(".voca-ko").hasClass("voca-ko");
		if (change) {
			$(".voca__en").addClass("voca-en");
			$(".voca-ko").removeClass("voca-en");
		}
	});
}

changevoca();

$(document).ready(function () {
	// 상단 검색 입력 처리
	$(".search-inner-keyword").focus(function () {
		$(this).attr("placeholder", "");
	});

	// 메인 검색 입력 처리
	$(".search-board-keyword").focus(function () {
		$(this).attr("placeholder", "");
	});

	// 클릭 시 placeholder 복원
	$(document).click(function (event) {
		// 상단 검색창 외 클릭
		if (!$(event.target).closest(".search-inner-keyword").length) {
			$(".search-inner-keyword").attr("placeholder", "검색어를 입력해주세요.");
		}
		// 메인 검색창 외 클릭
		if (!$(event.target).closest(".main-search-box").length) {
			$(".search-board-keyword").attr(
				"placeholder",
				"선진의 다양한 프로젝트를 검색하세요."
			);
		}
	});

	// 돋보기 클릭 시 검색창 열기
	$(".top-bar-icon-search").click(function () {
		$("#top-bar-pop").addClass("active");
	});

	// 닫기 버튼 클릭 시 검색창 닫기
	$(".close-btn").click(function () {
		$(".pop-wrap").removeClass("active");
	});
});


// 메인 생성 pop-wrap 생성, 제거

function PopAddHighRed() {
	$(".open-pop-up-red").click(function () {
		$("#main-pop-red").addClass("active");
	})
}

PopAddHighRed();

function PopRemoveMainRed() {
	$(".close-btn").click(function () {
		$("#main-pop-red").removeClass("active");
	});
}

PopRemoveMainRed();

function PopAddHighOrange() {
	$(".open-pop-up-orange").click(function () {
		$("#main-pop-orange").addClass("active");
	})
}

PopAddHighOrange();

function PopRemoveMainOrange() {
	$(".close-btn").click(function () {
		$("#main-pop-orange").removeClass("active");
	});
}

PopRemoveMainOrange();