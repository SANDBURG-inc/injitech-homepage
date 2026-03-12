# EmailJS Template Guide

EmailJS 대시보드([https://dashboard.emailjs.com/](https://dashboard.emailjs.com/))에서 사용할 수 있는 맞춤형 이메일 템플릿입니다.

## 1. 전송 데이터 매핑 (InquiryModal.tsx)

현재 `InquiryModal.tsx`에서 다음과 같은 변수들을 전송하고 있습니다:

- `from_name`: 고객 성함
- `from_email`: 고객 이메일
- `from_phone`: 고객 연락처
- `organization`: 소속 기관/회사
- `job_title`: 직함
- `product_interest`: 관심 제품
- `message`: 상세 메시지 (내용 요약 포함)

## 2. 템플릿 HTML (복사해서 사용하세요)

EmailJS의 **Email Templates > Edit Sample Template** 섹션에서 'Edit Content'를 누르고 'HTML' 모드로 전환한 뒤 아래 코드를 붙여넣으세요.

```html
<div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; font-size: 14px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
  <!-- Header -->
  <div style="background-color: #0ea5e9; padding: 20px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 20px;">새로운 도입 문의가 접수되었습니다</h1>
  </div>

  <!-- Content -->
  <div style="padding: 30px;">
    <p style="margin-top: 0;"><strong>{{from_name}}</strong> 님께서 홈페이지를 통해 도입 문의를 남기셨습니다.</p>
    
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #0ea5e9; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">문의 정보</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 100px;">소속</td>
          <td style="padding: 8px 0;"><strong>{{organization}}</strong> ({{job_title}})</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">관심 제품</td>
          <td style="padding: 8px 0; color: #0ea5e9;"><strong>{{product_interest}}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">연락처</td>
          <td style="padding: 8px 0;">{{from_phone}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">이메일</td>
          <td style="padding: 8px 0;"><a href="mailto:{{from_email}}" style="color: #0ea5e9; text-decoration: none;">{{from_email}}</a></td>
        </tr>
      </table>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #1e293b; font-size: 16px;">상세 내용</h3>
      <p style="white-space: pre-wrap; background-color: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; color: #475569;">{{message}}</p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
    본 메일은 인지테크 홈페이지 문의 폼을 통해 자동으로 발송되었습니다.
  </div>
</div>
```

## 3. 설정 팁
- **To Email**: `jhchoi@inji-tech.com`으로 설정하세요.
- **Subject**: `[홈페이지 문의] {{organization}} - {{from_name}} 님의 도입 문의`
- **Reply-to**: `{{from_email}}`로 설정하면 바로 답장하기 편리합니다.
