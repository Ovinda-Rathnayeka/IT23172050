import { test, expect } from '@playwright/test';

test.describe('ITPM Assignment 1 - Singlish to Sinhala Automation (Verified Excel Data)', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(120000); // 2-minute timeout for the long text cases (L)

    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'networkidle',
    });

    const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const sinhalaOutput = page.locator('div.flex-grow.bg-slate-50');

    await expect(singlishInput).toBeVisible();
    await expect(sinhalaOutput).toBeVisible();
  });

  const getInputs = (page: any) => ({
    singlishInput: page.locator('textarea[placeholder="Input Your Singlish Text Here."]'),
    sinhalaOutput: page.locator('div.flex-grow.bg-slate-50'),
  });

  // ===========================================================================
  // 1. POSITIVE FUNCTIONAL TESTS (24 Cases from Excel)
  // ===========================================================================

  const positiveTests = [
    { id: 'Pos_Fun_0001', input: 'aayuboovan, kohomadha oyaata?', expected: 'ආයුබෝවන්, කොහොමද ඔයාට?' },
    { id: 'Pos_Fun_0002', input: 'mama dhaen kaeema kanavaa.', expected: 'මම දැන් කෑම කනවා.' },
    { id: 'Pos_Fun_0003', input: 'api heta kandy yamu', expected: 'අපි හෙට kandy යමු.' },
    { id: 'Pos_Fun_0004', input: 'nimal iiyee gedhara giyaa.', expected: 'නිමල් ඊයේ ගෙදර ගියා.' },
    { id: 'Pos_Fun_0005', input: 'suba upandhinayak veavaa!', expected: 'සුබ උපන්දිනයක් වේවා!' },
    { id: 'Pos_Fun_0006', input: 'mata podi udhavvak karanna puLuvandha?', expected: 'මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0007', input: 'vahaama eeka bimin thiyanna.', expected: 'වහාම ඒක බිමින් තියන්න.' },
    { id: 'Pos_Fun_0008', input: 'mama ohuva dhaAAnnee naehae.', expected: 'මම ඔහුව දාන්නෙ නැහැ.' },
    { id: 'Pos_Fun_0009', input: 'iiyea apea geval laGA accident ekak vunaa.', expected: 'ඊයේ අපේ ගෙවල් ලඟ accident එකක් වුනා.' },
    { id: 'Pos_Fun_0010', input: 'oyaalaa ee vaeda tika kaLaadha?', expected: 'ඔයාලා ඒ වැඩ ටික කළාද?' },
    { id: 'Pos_Fun_0011', input: 'magea whatsapp account eka hack vunaa.', expected: 'මගේ whatsapp account එක hack වුනා.' },
    { id: 'Pos_Fun_0012', input: 'api One Galle Face paeththe gihin emudha?', expected: 'අපි One Galle Face පැත්තෙ ගිහින් එමුද?' },
    { id: 'Pos_Fun_0013', input: 'adoo gaemmak thamayi ithin.', expected: 'අඩෝ ගැම්මක් තමයි ඉතින්.' },
    { id: 'Pos_Fun_0014', input: 'meaka USD 500.99k venavadha?', expected: 'මේක USD 500.99ක් වෙනවද?' },
    { id: 'Pos_Fun_0015', input: 'mama edhdhi 10.00 PM vagea veyi.', expected: 'මම එද්දි 10.00 PM වගේ වෙයි.' },
    { id: 'Pos_Fun_0016', input: 'dhaen dollar ekath tika tika vaedi venavaa.', expected: 'දැන් dollar එකත් ටික ටික වැඩි වෙනවා.' },
    { id: 'Pos_Fun_0017', input: 'vinaadiyak inna.', expected: 'විනාඩියක් ඉන්න.' },
    { id: 'Pos_Fun_0018', input: 'mama kaeema kaeevaa. dhaen dhath madhinna yanavaa.', expected: 'මම කෑම කෑවා. දැන් දත් මදින්න යනවා.' },
    { id: 'Pos_Fun_0019', input: 'bosaa mama gedhara yana gaman inne.', expected: 'බොසා මම ගෙදර යන ගමන් ඉන්නේ.' },
    { id: 'Pos_Fun_0020', input: 'eyaalaa heta gamea yanavaa.', expected: 'එයාලා හෙට ගමේ යනවා.' },
    { id: 'Pos_Fun_0021', input: 'oyaa (kavishka) gedhara vaeda karaadha?', expected: 'ඔයා (කවිශ්ක) ගෙදර වැඩ කරාද?' },
    { id: 'Pos_Fun_0022', input: 'dhaen aapu OTP eka kiyanna.', expected: 'දැන් ආපු OTP එක කියන්න.' },
    { id: 'Pos_Fun_0023', input: 'oya meka kaloth mama oyaata thaggak dhenava.', expected: 'ඔයා මේක කළොත් මම ඔයාට තෑග්ගක් දෙනවා.' },
    { id: 'Pos_Fun_0024', input: 'api heta udhee paandhara kandy gihin ethaena iDHAlaa nuvaraeLiya yanna hithan innee. ehee hari lassanayi kiyalaa haemooma kiyanavaa. siithala dhavasata api jacket dhaagena hot tea bonna aasayi. oyaa enavaanam api kandy station ekeedhi set vemu. parakku venna epaa mokadha train eka udhee 6.30 ta pitath venavaa. iita passee api kandy vala dhaLadhaa maaLigaava vaeDHAlaa, hanthaana kandha naGAinna yanavaa. mee trip eka loku ekak nisaa godak salli oona veyi kiyalaa hithanavaa.', expected: 'අපි හෙට උදේ පාන්දර kandy ගිහින් එතැන ඉඳලා නුවරඑළිය යන්න හිතන් ඉන්නේ. එහේ හරි ලස්සනයි කියලා හැමෝම කියනවා. සීතල දවසට අපි jacket දාගෙන hot tea බොන්න ආසයි. ඔයා එනවානම් අපි kandy station එකේදි set වෙමු. පරක්කු වෙන්න එපා මොකද train එක උදේ 6.30 ට පිටත් වෙනවා. ඊට පස්සේ අපි kandy වල දළදා මාළිගාව වැඳලා, හන්තාන කන්ද නඟින්න යනවා. මේ trip එක ලොකු එකක් නිසා ගොඩක් සල්ලි ඕන වෙයි කියලා හිතනවා.' },
  ];

  for (const data of positiveTests) {
    test(data.id, async ({ page }) => {
      const { singlishInput, sinhalaOutput } = getInputs(page);
      await singlishInput.fill('');
      await singlishInput.type(data.input, { delay: 10 });
      await expect(sinhalaOutput).toContainText(data.expected, { timeout: 15000 });
    });
  }

  // ===========================================================================
  // 2. NEGATIVE FUNCTIONAL TESTS (10 Cases from Excel - Expected to Fail)
  // ===========================================================================

  const negativeTests = [
    { id: 'Neg_Fun_0001', input: '5 * 5 = 25 neda?', expected: '5 * 5 = 25 නේද?' },
    { id: 'Neg_Fun_0002', input: 'SELECT * FROM users WHERE id=1', expected: 'SELECT * FROM users WHERE id=1' },
    { id: 'Neg_Fun_0003', input: 'lassana malak 🌸', expected: 'ලස්සන මලක් 🌸' },
    { id: 'Neg_Fun_0004', input: '<i>italics text</i>', expected: '<i>italics text</i>' },
    { id: 'Neg_Fun_0005', input: 'auwa godak thiyenava', expected: 'අව්ව ගොඩක් තියෙනවා' },
    { id: 'Neg_Fun_0006', input: 'mail eka test@gmail.com', expected: 'mail eka test@gmail.com' },
    { id: 'Neg_Fun_0007', input: 'ammmmaaaa', expected: 'අම්මා' },
    { id: 'Neg_Fun_0008', input: 'gooooooodak', expected: 'ගොඩක්' },
    { id: 'Neg_Fun_0009', input: 'ID,Name,City,Status\\n101,Amila,Kandy,Active', expected: 'ID,Name,City,Status\\n101,Amila,Kandy,Active' },
    { id: 'Neg_Fun_0010', input: '"Mesa para nada" (Spanish)', expected: '"Mesa para nada" (Spanish)' },
  ];

  for (const data of negativeTests) {
    test(data.id, async ({ page }) => {
      // test.fail() tells Playwright to expect the transliteration to be wrong (Robustness testing)
      test.fail(); 
      const { singlishInput, sinhalaOutput } = getInputs(page);
      await singlishInput.fill('');
      await singlishInput.type(data.input);
      await expect(sinhalaOutput).toHaveText(data.expected, { timeout: 5000 });
    });
  }

  // ===========================================================================
  // 3. POSITIVE UI TEST (From Excel)
  // ===========================================================================

  test('Pos_UI_0001: Landing Page Layout Consistency', async ({ page }) => {
    const { singlishInput, sinhalaOutput } = getInputs(page);
    await expect(singlishInput).toBeVisible();
    await expect(sinhalaOutput).toBeVisible();
    
    // Validating header presence as part of page consistency
    const logo = page.locator('h1:has-text("Singlish to Sinhala")');
    await expect(logo).toBeVisible();
  });
});