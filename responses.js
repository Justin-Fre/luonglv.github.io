function getBotResponse(input){
    let questionAnswer = initData();


    let keys = Array.from(questionAnswer.keys());
    input = chuanHoa(input);
    console.log(input);

    for(let i=0; i < keys.length; i++){
        if(isMatchFull(input, keys[i])){
            return questionAnswer.get(keys[i]);
        }
    }



    const clientQuestionArray1 = input.split(" ");
    for(let i=0; i < keys.length; i++){
        if(isMatch(clientQuestionArray1, keys[i])){
            return questionAnswer.get(keys[i]);
        }
    }

    return keys;

}



function initData(){
    let questionAnswer = new Map();
    questionAnswer.set('Xin chào hi hello how are you','Xin chào! Tôi có thể giúp gì cho bạn?');
     questionAnswer.set('CHÍNH SÁCH, QUY ĐỊNH','Câu hỏi bạn muốn đặt là:' +
        '<br> 1. Đối tượng đánh giá Incentive/KPI?' +
        '<br> 2. Tần suất đánh giá và các quy định chung?' +
        '<br> 3. Phương thức đánh gía?' +
        '<br> 4. Các lưu ý về bộ KPI theo chức danh.' +
        '<br> 5. Năng suất lao động tiêu chuẩn.' +
        '<br> 6. Bộ hệ số ảnh hưởng đến năng suất lao động tiêu chuẩn' +
        '<br> 7. Đối tượng chi trả Incentive' +
        '<br> 8. Điểm sàn.' +
        '<br> 9. Điểm vượt sàn.' +
        '<br> 10. Tổng điểm chi trả.'+
        '<br> 11. Điều kiện chi trả Incentive.' +
        '<br> 12. Tổng điểm quy đổi.' +
        '<br> 13. Các hệ số ảnh hưởng quy đổi điểm.' +
        '<br> 14. Quy định về ghi nhận điểm theo chức danh đặc thù.'+
        '<br> 15. Quy định về tổng điểm tối đa theo sản phẩm.' +
        '<br> 16. Công thức tính thưởng.' +
        '<br> 17. Quy định về mức trần lương khuyến khích.' +
        '<br> 18. Quy định về việc truy thu lương khuyến khích.' +
        '<br> 19. Các quy định về việc giữ lại lương khuyến khích.' +
        '<br> 20. Lộ trình thăng tiến.' +
        '<br> 21. Các quy định chung về xét thăng tiến.' +
        '<br> 22. Tiêu chuẩn thăng tiến.' +
        '<br> 23. Quy định về nhân sự.' +
        '<br> 24. Quy định về làm tròn.' +
        '<br> 25. Quy định về luồng trình ngoại lệ' +
        '<br> 26. Quy định về thẩm quyền phê duyệt.' +
        '<br> 27. Đối tượng áp dụng CBQL tính Incentive.' +
        '<br> 28. Các nguyên tắc chung tính Incentive cho CBQL.' +
        '<br> 29. Quy định chi trả lương khuyến khích cho CBQL.' +
        '<br> 30. Các vị trí thuộc nhóm 1 tính LKD.' +
        '<br> 31. Các vị trị thuộc nhóm 2 tính LKD.' +
        '<br> 32. Các vị trí thuộc nhóm 3 tính LKD.' +
        '<br> 33. Phụ lục 01: Điểm sàn, nhòm tính LKD theo chức danh - vị trí' +
        '<br> 34. Phụ lục 02.01: Nguyên tắc ghi nhận TD mới.' +
        '<br> 35. Phụ lục 02.02: Nguyên tắc ghi nhận cũ.' +
        '<br> 36. Phụ lục 02.03: khoản CASA mới.' +
        '<br> 37. Phụ lục 02.04: khoản CASA cũ.' +
        '<br> 38. Phụ lục 03. Bảng phân nhóm theo vị trí công việc đặc thù.' +
        '<br> 39. Tổng điểm quy đổi?');
    questionAnswer.set('SẢN PHẨM, RULE GHI NHẬN','Câu hỏi bạn muốn đặt là:' +
        '<br> 1. DAO là gì?' +
        '<br> 2. DAO CIF là gì?' +
        '<br> 3. DAO sản phẩm là gì?'+
        '<br> 4. DAO quản lý/DAO định danh/DAO phân khúc là gì?' +
        '<br> 5. OPEN Branch ID là gì?' +
        '<br> 6. Chi nhánh định biên là gì?' +
        '<br> 7. BSC Branch ID là gì?' +
        '<br> 8. Khu vực working là gì?' +
        '<br> 9. Tập khách hàng BSC quản lý?' +
        '<br> 10. Target của từng chỉ tiêu là gì?' +
        '<br> 11. TD là gì? Term Deposit Tiền gửi có kỳ hạn' +
        '<br> 12. EOP là gì? End of deposit số dư cuối kỳ' +
        '<br> 13. ADB là gì?' +
        '<br> 14. EOP TD tăng ròng là gì? tăng ròng số dư TD cuối kỳ' +
        '<br> 15. ADB TD tăng ròng là gì? tăng ròng TD trung bình' +
        '<br> 16. Doanh thu thuần là gì?' +
        '<br> 17. Tài khoản số đẹp là gì?' +
        '<br> 18. Thẻ IDC/CC là gì?'+
        '<br> 19. OD là gì?' +
        '<br> 20. UPL là gì?' +
        '<br> 21. LOP là gì?' +
        '<br> 22. PAYROLL là gì?' +
        '<br> 23. Vay cầm cố Bond là gì?' +
        '<br> 24. FX là gì?' +
        '<br> 25. CASA chất lượng 2 triệu là gì?' +
        '<br> 26. Hệ số khu vực là gì?' +
        '<br> 27. Hệ số chức danh là gì?' +
        '<br> 28. Hệ số thâm niên là gì?' +
        '<br> 29. Hệ số mùa vụ là gì?' +
        '<br> 30. Hệ số đặc thù là gì?' +
        '<br> 31. Khách hàng New-to-bank là gì?' +
        '<br> 32. Khách hàng hiện hữu (ETB) là gì?' +
        '<br> 33. Khách hàng ngủ đông là gì?' +
        '<br> 34. Vay mua nhà là gì?' +
        '<br> 35. Vay mua ô tô, tiêu dùng là gì?' +
        '<br> 36. Vay kinh doanh là gì?' +
        '<br> 37. UPL HKD là gì?' +
        '<br> 38. Khách hàng AF là gì?' +
        '<br> 39. Khách hàng MAF là gì?' +
        '<br> 40. Khách hàng và HĐ NTB - UPL hộ kinh doanh là gì?' +
        '<br> 41. Merchant - Hộ kinh doanh là gì?' +
        '<br> 42. Product holding(PH) là gì?' +
        '<br> 43. Các lưu ý theo sản phẩm ' );
    questionAnswer.set('TRA SOÁT KPI VÀ INCENTIVE','Câu hỏi bạn muốn đặt là:' +
        '<br> 1.Quy trình tra soát KPI cho vị trí CSR' +
        '<br> 2.Quy trình tra soát Incentive vị trí CSR' +
        '<br> 3.Link báo cáo KPI' +
        '<br> 4.Link báo cáo Incentive');
    questionAnswer.set('CONTACT STAKEHOLDER','Câu hỏi bạn muốn đặt là:' +
        '<br> 1.Đơn vị BMT (chính sách/sản phẩm)' +
        '<br> 2.Đơn vị BSC-HO (nghiệp vụ)' +
        '<br> 3.Đơn vị EDA - BIC (số liệu)');
    questionAnswer.set('ABOUT ME','Câu hỏi bạn muốn đặt là:' +
        '<br> 1.A. <br> 2.B');
    questionAnswer.set('DAO là gì dao','DAO là mã cán bộ bán hàng, mã cán bộ bán hàng lấy theo dữ liệu DAO cập nhật trên hệ thống dựa theo file nhân sự HR gửi hàng tháng.<br> Đây là thông tin quan trọng để lấy số lượng sản phẩm bán.<br> MAP thông tin mã Staff ID trên file nhân sự và mã Staff ID trên dữ liệu DAO( TH không map được DAO sẽ có dữ liệu');
    questionAnswer.set('DAO CIF là gì','DAO CIF là mã cán bộ bán hàng gắn trên CIF khách hàng');
    questionAnswer.set('DAO sản phẩm là gì? dao sp','DAO SP là mã cán bộ bán hàng gắn trên sản phẩm');
    questionAnswer.set('DAO quản lý/DAO định danh/DAO phân khúc là gì?','Mã cán bộ quản lý KH. <br>Theo phân khúc MAF-> DAO quản lý = PB DAO. <br>AF -> DAO quản lý = RM DAO');
    questionAnswer.set('OPEN Branch ID là gì?','Là mã chi nhánh mở, mã chi nhánh mở/bán sản phẩm');
    questionAnswer.set('Chi nhánh định biên là gì?','Là Chi nhánh làm việc, chi nhánh mà DAO thực tế làm việc');
    questionAnswer.set('BSC Branch ID là gì?','Là Mã chi nhánh tính cho BSC, tùy vào từng sản phẩm sẽ ghi nhận cho chi nhánh như sau: <br>1.CIF mở mới: ghi nhận theo CN mở CIF. <br>2.TD offline: ghi nhận theo CN mở TD.<br>3.TD online: ghi nhận theo CN DAO làm việc tại thời điểm mở. <br>4.Nếu không xác đinh được sẽ tính cho CN mà TD đang được gán. <br>5.VPO: ghi nhận về cho CN mà DAO được gán đang làm việc tại thời điểm kích hoạt. <br>6.Thẻ IDC/CC: ghi nhận về cho CN được gán DAO đang làm việc tại thời điểm ghi nhận.<br>7.Các sản phẩm khác: ghi nhận về CN mở.');
    questionAnswer.set('Khu vực working là gì?','Là khu vực làm việc' +
        ', ghi nhận theo BSC Branch ID và bảng phân khu vực do BSC gửi');
    questionAnswer.set('Tập khách hàng BSC quản lý?','Là khách hàng BSC quản lý và  được tính chỉ tiêu TD cuả các tài khoản TD gắn với tập này '+
        ", tập khách hàng bao gồm 2 phần:" +
        " <br> 1.Tập khách hàng BSC được phân bổ vào tháng 03 trong năm (hoặc tuỳ theo chính sách từng năm)." +
        " <br> 2.Tập khách hàng mới trong năm báo cáo và có gắn DAO CIF là DAO CSR");
    questionAnswer.set('Target của từng chỉ tiêu là gì?','Là mức NSLĐ tiêu chuẩn bán của từng chỉ tiêu' +
        ", mức NSLĐ bán tiêu chuẩn để hoàn thành 100% chỉ tiêu được giao. <br> Mức NSLĐ tiêu chuẩn bán của vị trị các vị trí CSR bị ảnh hưởng bởi các hệ số:" +
        "<br>Hệ số chức danh, hệ số thâm niên, hệ số vùng miền, hệ số đặc biệt(nếu có), hệ số dặc thù, hệ số mùa vụ" +
        "<br>-> Mức NSLĐ bán tiêu chuẩn trên Saletool do BSC HO gửi cho BIC hàng kỳ hoặc khi có sự thay đổi.");
    questionAnswer.set('TD là gì? Term Deposit Tiền gửi có kỳ hạn','Term Deposit ' +
        ", là tài khoản tiết kiệm có kỳ hạn." + 
        "<br> Note: RULE ghi nhân DAO theo thứ tự ưu tiên như sau:" +
        "<br> 1.TD của tập KH do BSC quản lý: Ghi nhận theo DAO CIF" +
        "<br> 2.TD của tập KH MASS: ghi nhận theo DAO SP" +
        "<br> 3.TD của tập KH AF, MAF:" +
        "<br> 3.1.Trong tháng định danh: ghi nhận theo DAO SP " + 
        "<br> 3.2. Nếu sau tháng định danh: ghi nhận theo DAO quản lý (PB_DAO(KH MAF)" +
        " hoặc RM DAO (KH AF)" +
        "<br> 4.TD của tập KH refer: ghi nhận theo DAO refer = DAO sp");
    questionAnswer.set('EOP là gì? End of deposit số dư cuối kỳ','Số dư TD cuối kỳ ' +
        ", là số dư tài khoản tiết kiệm (TD) tại thời điểm cuối kỳ. <br> Nếu TD đã đóng tại cuối kỳ thì số dư cuối kỳ = 0");
    questionAnswer.set('ADB là gì?','"Số dư TD bình quân trong kỳ '+
        ", là số dư TD trung bình trong kỳ được tính." +
        "<br> Ví dụ: Tổng(Giá trị TD từ ngày 1-n)/Tổng số ngày trong kỳ." +
        " <br> ex1: TD1 có giá trị ngày 1-10: 100 triệu, ngày 11-20: 101 triệu, ngày 21-31: 105 triêu" +
        " <br> >>> ADB TD1 = ((100*10) + (101*10) + (105*11))/31 = 102.097" +
        " <br> ex2: TD2 có giá trị ngày 1-20: 101 triệu, tất toán vào này 21" +
        " <br> >>> ADB TD2 = ((101*20) + (0*11))/31 = 65.16");
    questionAnswer.set('EOP TD tăng ròng là gì? tăng ròng số dư TD cuối kỳ','Là tăng ròng số dư TD cuối kỳ ' +
        ",<br> là giá trị tăng ròng số dư TD trung bình của tài khoản tại kỳ báo cáo so với kỳ trước đó." +
        " <br> Chỉ tiêu này được tính cho vị trí CSM, KSV." +
        " <br> Cách tính: EOP kỳ báo cáo - EOP kỳ báo cáo liền kề trước.");
    questionAnswer.set('ADB TD tăng ròng là gì? tăng ròng TD trung bình','Là tăng ròng số dư TD trung bình ' +
        ", là giá trị tăng ròng số dư TD trung bình của tài khoản tại kỳ báo cáo so với kỳ liền trước.<br> Chỉ tiêu này được tính cho vị trí CSR." +
        "<br> Cách tính: ADB kỳ báo cáo -  ADB kỳ báo cáo liền kề trước" );
    questionAnswer.set('Doanh thu thuần là gì?','"Là tổng phí bảo hiểm nhân thọ AIA nhân với tỷ lệ quy định từ BMT' +
        ",<br> là tổng phí bảo hiểm hiểm nhân thọ thực thu của KH (bao gồm phí bảo hiềm sản phẩm chính" +
        ", phí bổ sung và phí TOPUP của SP (ILP3) trong kỳ. <br> Bao gồm 2 phần:" +
        " <br> 1.Phí bảo hiểm mới trong kỳ và Phí bảo hiểm huỷ trong kỳ." +
        " <br> 2.Cách tính: ( Phí bảo hiểm bán mới trong kỳ - Phí bảo hiểm huỷ trong kỳ) * 53.9%");
    questionAnswer.set('Tài khoản số đẹp là gì?','Là tài khoản mở mới trong tháng, là tài khoản số đẹp và có phí phát sinh ' +
        " Cách tính: fee_amt>0" );
    questionAnswer.set('VPO kích hoạt là gì?','Là tài khoản VPbank Neo kích hoạt mới ' +
        " <br> Cách ghi nhận: thoả mãn điều kiện sau đây" + 
        " <br> 1.Tài khoản được Active và KYC cùng tháng hoặc tài khoản KYC trước, Active sau tính theo thời gian active." +
        " <br> 2.Tài khoản được Active trước và KYC sau, tính theo thời gian KYC thành công." +
        " <br> 3.Tài khoản của KH mở CIF trươds 03/2020 và có cust Type khác (174,181) và được Active trong kỳ."+
        " <br> 4.Không ghi nhận các trường hợp khi Open_DAO null" +
        " <br> 5.Nếu Open_DAO # Activeted_DAO bắt thêm điều kiện ngày kích thước trừ ngày mở phải lớn hoặc bằng 2 ngày ghi nhận DAO kích hoạt (Activated_DAO)");
    questionAnswer.set('Thẻ IDC/CC là gì?','Là thẻ ghi nợ quốc tế, thẻ tín dụng' +
        " <br> Cách ghi nhận: <br> - Thẻ vật lý hoạt động trong vòng 3 tháng kể từ thời điểm phát hành" +
        " <br> - Thẻ phi vật lý hoạt động và thẻ vật lý kích hoạt trong vòng 3 tháng kể từ thời điểm phát hành." +
        " <br> + Thẻ hoạt động là thẻ có phát sinh giao dịch chi tiêu(đối với thẻ CC) hoặc thẻ có chi tiêu qua POS," +
        " chi tiêu online, rút tiền tại ATM ( đối với thẻ IDC) và được hạch toán thành công trên Way4" +
        " <br> + Ghi nhận theo tháng phát sinh giao dịch chi tiêu" +
        " <br> + Thẻ còn ở trạng thái Card OK tại kỳ báo cáo" +
        " <br> + Không tính thẻ wasi" +
        " <br> + Không tính thẻ phụ ( đối với thẻ CC) và thẹ phụ KH Mass(đối với thẻ IDC) vào KPI" +
        " <br> + Ghi nhận tối đa 5 thẻ phụ IDC/CIF KH với thẻ IDC, tối đa 2 thẻ phụ/CIF KH với thẻ CC");
    questionAnswer.set('OD là gì?','Là hợp đồng thấu chi mới có phát sinh số dư âm qua đểm trong vòng 2 tháng liền kề từ tháng cấp hạn mức thấu chi. Chỉ ghi nhận tài khoản được cấp thấu chi 1 năm 1 lần');
    questionAnswer.set('Bảo hiểm phi nhân thọ là gì?','Là sản phẩm bảo hiểm phi nhân thọ được tính theo quy định cảu bảo hiểm'+
        " từng kì. Hiện tại chỉ tính sản phẩm bảo hiểm sức khoẻ");
    questionAnswer.set('UPL là gì?','Là vay tín chấp cá nhân. Ghi nhận theo dư nợ giải ngân mới trong kỳ');
    questionAnswer.set('Trái phiếu là gì?','Là hợp đồng trái phiếu bán mới trong tháng');
    questionAnswer.set('LOP là gì? Loan on phone','Loan On Phone là giao dịch rút tiền mặt qua tổng đài 24/7 trong thời gian 3 ngày '+
        " kể từ ngày CBBH chốt đăng ký giao dịch trên CRM" +
        " <br> Code nhận dạng: Status in ('OPEN','PAIDPART','WAITING','OVD') AND TRANS_TYPE_DETAIL ='LOP' AND TRANS_TYPE IS NULL");
    questionAnswer.set('PAYROLL là gì?','Là tài khoản trả lương mở mới không qúa 3 năm (tính đến năm xét KPI),' +
        " mở kèm VPBank NEO kích hoạt và tổng giao dịch đổ lương tối thiểu 6 triệu trong tháng báo cáo."+
        " <br> Code ghi nhận: Product_name = '1. Term deposit' and  category = '1015' and bal_qd >= 6e6'" +
        " and dateiff(day,openning_date,getdate()) <= 1095");
    questionAnswer.set('Vay cầm cố Bond là gì?','Ghi nhận theo dư nợ giải ngân mới trong tháng tính thưởng.' +
        " <br> Code nhận dạng: Product_code =. 'LDS04029");
    questionAnswer.set('FX là gì? Foreign exchange','Foreign Exchange. Trao đổi ngoại hối hay tiền tệ quốc tế' +
        " <br> Code nhận dạng: DAO is not null and  [FX_FO (QUY ĐỔI)] >= 3 triệu and [Mục đích] <> N'KH mua/bán tiền mặt");
    questionAnswer.set('CASA chất lượng 2 triệu là gì?','Là tài khoản thanh toán, trong vòng 12 tháng kể từ thời điểm mở tài khoản, có ít nhất 1 tháng có SDBD CASA của tài khoản đạt tối thiểu  2 triệu.' +
        " <br> Code nhận dạng: Product_name =. '1.Current account' and ccy = 'vnd' and avgbal_qd >= 2*1e7");
    questionAnswer.set('Hệ số khu vực là gì?','Là hệ số phụ thuộc vào khu vực địa lý, được GĐK ban hành theo từng tời kỳ' +
                "(Hà Nội,Hồ Chí Mình,Tỉnh)");
    questionAnswer.set('Hệ số chức danh là gì?','Là hệ số liên quan đến chức danh của cán bộ bán' +
        " (CVT1, CVT2, Nhân viên, Chuyên viên, Chuyên viên chính, Chuyên viên cao cấp bậc 7,8)");
    questionAnswer.set('Hệ số thâm niên là gì?','Là hệ số hỗ trợ chỉ tiêu cho các chức danh mới bắt đầu làm việc tại VPBANK' +
        " hoặc điều chuyển nội bộ từ vị trí Back office sang lực lượng bán hàng" +
        " (thử việc, chính thức).");
    questionAnswer.set('Hệ số mùa vụ là gì?','Là hệ số điều chỉnh theo từng tháng phù hợp với thị trường. ');
    questionAnswer.set('Hệ số đặc biệt là gì?','Là hệ số điều chỉnh đặc biệt được áp dụng theo các giai đoạn kinh doanh khó khăn, các tình huốn ' +
        "bất khả kháng do thiên tai/dịch bệnh ... được quyết định bởi Giám đốc Khối KHCN");
    questionAnswer.set('Hệ số đặc thù là gì?','Là hệ số áp dụng đối với CSR được phân công thực hiện một số công việc' +
        "đặc thù khác. <br> Bảng hệ số sẽ căn cứ trên vị trí công việc đặc thù, được quy định" +
        " chi tiết khi ban hành bộ KPI và hướng dẫn đánh giá chi tiết KPI của DVKHCN, " +
        " được GĐK uỷ quyền  cho GĐTTBSC quyết định theo từng thời kỳ. Bảng phân nhóm" +
        " theo vị trí công việc đăc thù (theo phụ lục số 03)");
    questionAnswer.set('Khách hàng New-to-bank là gì?','Là khách hàng mới mở CIF trong vòng n-3 tháng');
    questionAnswer.set('Khách hàng hiện hữu (ETB) là gì?','Là khách hàng mới mở CIF quá n-3 tháng');
    questionAnswer.set('Khách hàng ngủ đông là gì?','Là khách hàng mở CIF ít nhất 12 tháng trước tháng báo cáo (từ tháng n-13 trở về trước)' +
        "và không có giao dịch chủ động từ tháng n-12 đến tháng n-13." +
        "<br> Ví dụ: Tháng báo cáo là tháng 1/2023. KH cần thoả mãn điều kiện:" +
        "<br> - Không có giao dịch chủ động từ tháng n-2 (tháng 11/2022)" +
        " đến tháng n-13 (tháng 12/2021)" +
        "<br> - CIF mở ít nhất 12 tháng trước tháng báo cáo: mở CIF từ ngày31/12/2021 về trước.");
    questionAnswer.set('Vay mua nhà là gì?','Ghi nhận theo dư nợ giải ngân mới trong kỳ tinh thưởng.' +
        "<br> -Đối với giải ngân theo tiến độ: Ghi nhận theo dư nợ giải ngân trong kỳ tính thưởng." +
        "<br> -Trong một số trường hợp, khoản vay được áp dụng hệ số điều chỉnh riêng theo xác nhận của Trung tâm sản phẩm thế chấp nhưng không vượt quá 0.5."+
        "<br> -Các hợp đồng giải ngân vay đặt cọc mua nhà có thời hạn vay từ 6 tháng: ghi nhận 65% số tiền giải ngân khoản vay, phần còn lại ghi nhận tại giai đoạn giải ngân hợp đồng mua bán.");
    questionAnswer.set('Vay mua ô tô, tiêu dùng là gì?','Ghi nhận theo dư nợ giải ngân mới trong kỳ tính thưởng.');
    questionAnswer.set('Vay kinh doanh là gì?','<br> Vay theo món: Ghi nhận theo dư nợ giải ngân mới trong tháng.'+
        "<br>Vay theo hạn mức: Ghi nhận theo dư nợ giải ngân mới trong tháng.");
    questionAnswer.set('UPL HKD là gì?','Ghi nhận theo dư nợ giải ngân mới trong kỳ tính thưởng');
    questionAnswer.set('Khách hàng AF là gì?','Là KHUT có Segment = AF trên T24' +
        ",KHUT được chia thành các nhóm:" +
        "<br> - KHUT mới New-to-bank (NTB): Là KH New-to-bank định danh Preferred/Private" +
        "(theo định nghĩa AUM và CASA) trong tháng. <br> Nếu KH được định danh và kích hoạt" +
        "thành công VPBANK NEO: <br> Ghi nhận 100% điểm định danh; Nếu KH chưa kích hoạt thành công" +
        "VPBANK NEO: ghi nhận 50% điểm định danh;" +
        "<br> - KHUT ngủ đông (Dormant): Là khách hàng ngủ đông kích hoạt lại và được định danh Preferred/Private" +
        "(theo định nghĩa AUM và CASA) trong tháng;" +
        "<br> - KHUT trải nghiệm: chỉ tính điểm cho vị trí Tele AF"+
        "Tiêu chí liên quan đến KH AF mới chỉ ghi nhận KH NTB và ngủ đông kích hoạt lại.");
    questionAnswer.set('Khách hàng MAF là gì?','Là KH có Segment = MAF trên T24. <br> KH MAF gồm:'+
        "<br> Các nhóm tương tự KH AF. <br> Tiêu chi liên quan đến KH MAF mới chỉ ghi nhận KH NTB và ngủ đông kích hoạt lại.");
    questionAnswer.set('Khách hàng và HĐ NTB - UPL hộ kinh doanh là gì?','KH mới HHB: KH chưa từng vay tại TDTT hoặc vay tại khoản vay mới tại trung tâm TDTT' +
        "<br> - Sau 180 ngày kể từ ngày tất toán khoản vay cũ." +
        "<br> - Trường hợp khoản vay đầu của khách mới bị huỷ, các khoản vay ngay tiếp theo của khách hàng vẫn được gọi là KH mới." +
        "<br> - KH hiện hữu HHB: là khách hàng đang được sử dụng sản phẩm vay cảu TT TDTT hoặc vay mới tại trung tâm"+
        "trong vòng 180 ngày kể từ ngày tất toán khoản vay cũ." +
        "<br> - Hợp đồng NTB là hợp đồng giải ngân từ KH mới HHB.");
    questionAnswer.set('Merchant - Hộ kinh doanh là gì?','Cá nhân hoặc tổ chức có mối quan hệ và thực hiện giới thiệu các hộ tiêu thưởng' +
        "trên địa bản đồng thời liên kết thành công với Trung tâm TDTT-Khối KHCN. <br> - Khối KHCN. Merchant" +
        "active là merchant có khách hàng được giới thiệu giải ngân thành công");
    questionAnswer.set('Product holding(PH) là gì?','Là bình quân số lượng sản phẩm đang sử dụng của khách hàng,tính trên tập khách hàng do CBBH thực hiện'+
        "giải ngân mới trong tháng. <br> - Nguyên tắc đếm số lượng sản phẩm tuẩn theo quy định chung về cách tính" +
        "<br> - Product Holding của Khối KHCN. <br> - Cách tính tỷ lệ hoàn thành chỉ tiêu: Bằng số PH" +
        "thực hiện/PH kế hoạch. <br> - Mức chặn trần và chặn sàn của tiêu chí tuân theo quy định về nguyên tắc tính KPI cho các vị trí"+
        "bán hàng. <br> - Chi tiêu PH tính trên các KH giải ngân trong tháng không bị ảnh hưởng bới các"+
        "hệ số ảnh hưởng NSLĐ tiêu chuẩn.");
    questionAnswer.set('Đối tượng đánh giá Incentive/KPI?','Bộ chỉ tiêu này áp dụng cho tất cả các vị trí là lực lượng bán hàng chính thức toàn hệ thống bao gồm:' +
        '<br> 1. Kênh Chi nhánh. <br> (RM Prime, RM Diamond, LS Branch (HN-HCM/Province, LS HUB - AUTO RACE,Biz & Housing, Project, Mix, Auto Race (Province), PSE UPL Deaura, LS Hub - Telesale' +
        '<br> 2. Kênh tín chấp toàn quốc. <br> (DSA OM, DSA CC Province, DSA CC HN-HCM, DSA Premium, CCA OM Digital CC, Digital UPL, CC Digital backend, UPL Digital backend CFT CC UPL, CFT AF, CFT AIA, CFT PNT, CFT TSDB, CFT NEO, Tele AF, FSA' +
        '<br> 3. Kênh tín dụng tiểu thương. <br> MSO, RO, RO Secured, Telecaller' +
        '<br> 4. Dịch vụ khách hàng. <br> (CSR)' +
        '<br> 5. Trung tâm 247. <br> (TLS 247)');
    questionAnswer.set('Tần suất đánh giá và các quy định chung?','- KPIS/Incentive được đánh giá hàng tháng' +
        '<br> - Trường hợp cán bộ nhân viên có chức danh thuộc lực lượng bán hàng nhưng được phân công làm vị trí tương đương Back-office,' +
        ' chỉ thực hiện các công việc vận hành hỗ trợ và không trực tiếp tư vấn bán hàng: Không giao chỉ tiêu KPIs, không thuộc đối tượng nhận lương kinh doanh.' +
        '<br> Danh sách cán bộ Back-office được xác nhận bởi Giám đốc Vùng và Khối Quản trị Nguồn nhân lực.');
    questionAnswer.set('Phương thức đánh giá?',' - Mỗi vị trí được giao một bộ KPIs cụ thể' +
        '<br> - Tỷ lệ hoàn thành KPI hàng tháng tính bằng: ' +
        '<br> Công thức: %KPI = Tổng (Tỷ lệ hoàn thành từng tiêu chí chính * Trọng số của tiêu chí chính)' +
        '<br> - Tỷ lệ hoàn thành KPI trong 1 khoảng thời gian:' +
        '<br> Là bình quân tỷ lệ hoàn thành KPI trong khoảng thời gian xét KPI (bao gồm thời gian thử việc)' +
        '<br> Công thức: %KPI = (Tổng %KPI các tháng)/số tháng tính KPI' +
        '<br> Ví dụ: Quý II, CSR có tỷ lệ hoàn thành KPI các tháng 4,5,6 lần lượt là 126%, 90%, 150%. Vậy tỷ lệ hoàn thành KPI quý II là:'+
        '<br> (126% + 90% + 150%)/3 = 122%');
    questionAnswer.set('Các lưu ý về bộ KPI theo chức danh','- Cách ghi nhận sản phẩm trong bộ tiêu chí chính là doanh số bán không nhân với các hệ số quy định về cách tinh điểm sản phẩm.' +
        '<br> - Cách ghi nhận chi tiêu tổng điểm cá nhân là tổng điểm các sản phẩm dịch vụ bán được trong kỳ, không bao gồm điểm các sản phẩm đã được đưa thành tiêu chí chính.' +
        '<br> - Tỷ lệ hoàn thành từng tiêu chí là tỷ lệ giữa doanh số thực hiện và doanh số kế hoạch của tiêu chí. Tỷ lệ hoàn thành mỗi tiêu chí có mức trần 200%, mức sàn 0% (riêng chỉ tiêu RFW B0 có mức trần 120%' +
        '<br> - Với tiêu chí giải ngân, chỉ tính doanh số giải ngân của những khoản vay đủ đièu kiện tính lương kinh doanh.' +
        '<br> - Tổng điểm KPI có mức chặn tối đa 200%');
    questionAnswer.set('Năng suất lao động tiêu chuẩn.','Mỗi Cán bộ bán hàng (CBBH) được quy định năng suất lao động tiêu chuẩn (NSLĐ TC) căn cứ theo chức năng nhiệm vụ' +
        ' và định hướng kinh doanh của Khối Khách hàng Cá nhân (KHCN). Năng suất lao động tiêu chuẩn của mỗi CBBH khác nhau do có bộ hệ số phụ thuộc vào chức danh, thâm niên và hệ số điều chỉnh đặc biệt (nếu có)' +
        '<br> Công thức: NSLĐ TC = NSLĐ theo vị trí * Bộ hệ số');
    questionAnswer.set('Bộ hệ số ảnh hưởng đến năng suất lao động tiêu chuẩn','A. Hệ số khu vực (chỉ áp dụng đối với vị trí CSR)' +
        '<br> Là hệ số phụ thuộc vào khu vực địa lý, được GĐK ban hành theo từng thời kỳ:' +
        '<br> Hà Nội:           1.2' +
        '<br> Hồ Chí Minh:      1.0' +
        '<br> Tỉnh:             0.9' +
        '<br>B. Hệ số chức danh (chỉ áp dụng với vị trí CSR) ' +
        '<br>Chuyên viên: 1.0' +
        '<br>Chuyên viên chính: 1.2' +
        '<br>C. Hệ số thâm niên (chỉ áp dụng với vị trí CSR)' +
        '<br> Hệ số thâm niên là hệ số hỗ trợ chỉ tiêu cho các chức danh mới bắt đầu làm việc tại VPBank hoặc điều chuyển nội bộ từ vị trí Back office sang lực lượng bán hàng' +
        '<br> Vị trí CSR' +
        '<br> Thử việc: 0' +
        '<br> Chính thức: 1' +
        '<br> Tháng bắt đầu tính hỗ trợ chỉ tiêu căn cứ vào tháng hiệu lực của hợp đồng lao động/quyết định điều chuyển.' +
        '<br> - Nếu ngày Onboard nằm trong khoảng từ ngày 01 đến ngày 15, xét KPI và áp dụng hệ số hỗ trợ tại tháng bắt đầu.' +
        '<br> Nếu ngày Onboard nằm trong khoảng từ ngày 16 đến hết tháng, xét KPI và áp dụng hệ số hỗ trợ từ tháng tiếp theo liền kề' +
        '<br>D. Hệ số mùa vụ (chỉ áp dụng với vị trí CSR)' +
        '<br> Tháng 01: 0.7' +
        '<br> Tháng 02: 0.8' +
        '<br> Tháng 03,04,05,06,07,08,09: 1' +
        '<br> Tháng 10: 1.1' +
        '<br> Tháng 11: 1.15' +
        '<br> Tháng 12: 1.2' +
        '<br>E. Hệ số điều chỉnh đặc biệt (chỉ áp dụng với vị trí CSR)' +
        '<br> Hệ số điều chỉnh đặc biệt được áp dụng theo các giai đoạn kinh doanh khó khăn, các tình huống bất khả kháng do thiên tai/dịch bệnh...được quyết định bởi Giám đốc Khối KHCN' +
        '<br>F. Hệ số công việc đặc thù (chỉ áp dụng đối với vị trí CSR)' +
        '<br> Là hệ số áp dụng đối với CSR được phân công thực hiện một số công việc đặc thù khác.' +
        '<br> Bảng hệ số sẽ căn cứ trên vị trí công việc đặc thù, được quy định chi tiết khi ban hành bộ KPI và Hướng dẫn đánh giá chi tiết KPI của DVKHCN, được GDK uỷ quyền cho GDTT BSC quyết định theo từng thời kỳ, cụ thể được định nghĩa từng vị trí trong phụ lục 03.' +
        '<br> Lưu ý: Năng suất lao động tiêu chuẩn là năng suất áp dụng hệ số khu vực, hệ số chức danh,' +
        ', hệ số số thâm niên, hệ số mùa vụ, hệ số điều chỉnh đặc biệt là 1 và hệ số công việc đặc thù.' +
        'CBBH/CSR thực hiện quy chiếu hệ số tương ứng theo mốc hệ số này. Chi tiêu '+
        'RFW B0, chất lượng dịch vụ và Product Holding không bị ảnh hưởng bởi hệ số.');
    questionAnswer.set('Đối tượng chi trả Incentive','Đối tượng chi trả giống như đối tượng đánh giá. Đối tượng' +
        '<br> chi trả có thể thay đổi trong từng thời kỳ theo phê duyệt của Giám đốc Khối Khách hàng cá nhân.');
    questionAnswer.set('Điểm sàn','Điểm sàn là mốc điểm quy định cho từng chức danh vị trí. Điểm sàn của các vị trí được quy định tại phụ luc - Điểm sàn theo chức danh');
    questionAnswer.set('Tổng điểm chi trả:',' Tổng điểm chi trả là tổng điểm quy đổi từ các sản phẩm dịch vụ bán được trong kỳ, trừ đi phần từ (nếu có)' +
        '<br> Công thức: Tổng điểm chi trả = Điểm sàn + Điểm vượt sàn');
    questionAnswer.set('Tổng điểm quy đổi?',' Tổng điểm quy đổi là phần điểm số quy đổi doanh số các sản phẩm bán được trong kỳ:' +
        '<br> Công thức: Tổng điểm quy đổi = Tổng(Doanh số sản phẩm * Điểm quy đối)' +
        '<br> Trong đó:' +
        '<br> - Doanh số sản phẩm bán được trong kỳ: là phần doanh số thực hiện thực tế của các sản phẩm/dịch vụ bán được trong kỳ tính thưởng.' +
        '<br> Các sản phẩm/dịch vụ được quy đổi điểm các sản phẩm/dịch vụ có đơn giá quy đổi điểm.' +
        '<br> - Đơn giá điểm: là số điểm tính cho một đơn vị sản phẩm.' +
        '<br> + Điểm ICT: Sử dụng tính tổng điểm quy đổi' +
        '<br> + Điểm KPI: Sử dụng tính tiêu chí "Tổng điểm cá nhân" trong bộ KPI');
    questionAnswer.set('Các hệ số ảnh hưởng quy đổi điểm',' A. Hệ số ảnh hưởng quy đổi điểm là các hệ số nhân trực tiếp khi quy đổi doanh số của sản phẩm/dịch vụ ra điểm.' +
        '<br> B. Hệ số cơ chế bán trực tiếp:' +
        '<br> 1. Hệ số tái cấp: áp dụng 0.5 cho sản phẩm tái thấu chi. Với khoản vay thấu chi staff tai cấp: chỉ áp dụng hệ số staff.' +
        '<br> 2. Hệ số Staff: áp dụng 0.5 cho sản phẩm thấu chi/thẻ tín dụng cấp cho CBNV Vpbank' +
        '<br> 3. Hệ số phân khúc:' +
        '<br> - AF: 1.2' +
        '<br> - MAF: 1.1' +
        '<br> - MASS: 1.0' +
        '<br> Áp dụng cho sản phẩm thẻ ghi nợ quốc tế.' +
        '<br> 4. Hệ số thể phụ (*)' +
        '<br> - Thẻ ghi nợ quốc tế: 0.5' +
        '<br> - Thẻ tín dụng phụ: 0.2' +
        '<br> 5. Hệ số Deaura: áp dụng 0.5 cho sản phẩm UPL Deaura. Khoản vay này không nhân hệ số nguồn (nếu có)' +
        '<br> >>> Khi tính điểm cho thẻ ghi nợ quốc tế phụ, áp dụng đồng thời hệ số phân khúc và hệ số thẻ phụ. Không tính điểm cho thẻ phụ của phân khúc Mass.' +
        '<br> 6. Hệ số Auto RaceApp: áp dụng 0.7 cho sản phẩm vay thế chấp APP RaceApp' +
        '<br> C. Hệ số cơ chế bán giới thiệu: ' +
        '<br> Điểm khoản giới thiệu thành công được chia cho bên giới thiệu và bên được giới thiệu theo tỷ trọng trong Chương 3 mục 2 Các hệ số ảnh hưởng quy đổi điểm' +
        '<br> - Nếu KHUT do CSR giới thiêu: Ghi nhận 100% điểm cho CSR' +
        '<br> - Đối với các khách hàng thuộc đối tác liên kết do Trung tâm sản phẩm Thẻ, cho vay Tín chấp và Phân khúc UperMass (hoặc đơn vị tương đương) mang lại, CBBH thuộc đơn vị kinh doanh ghi nhận điểm quy đổi CC, UPL với hệ số 0.6');
    questionAnswer.set('Quy định về ghi nhận điểm theo chức danh đặc thù',' - Các vị trí khác RM Diamond và RM Prime không được ghi nhận điểm từ tăng/giảm ròng TD CASA' +
        '<br> - RM Diamond và RM Prime chỉ được ghi nhận điểm refer sản phẩm cho vay thế chấp' +
        '<br> - Chỉ tiêu Secured Lending của tất cả vị trí LS là chỉ tiêu sản phẩm tương ứng với vị trí chuyên biệt. Ngoài sản phẩm chuyên biệt, LS Hub được bán thêm sản phẩm khác và ghi nhận vào chi tiêu " Tổng điểm cá nhân" cũng như Tổng điểm quy đổi');    
    questionAnswer.set('Quy định về tổng điểm tối đa theo sản phẩm',' - Quy định về tổng điểm trần theo nhóm sản phẩm' +
        '<br> 1. Cho vay có TSĐB trừ nhà dự án: Tổng điểm tối đa là 500' +
        '<br> 2. Cho vay mua nhà dự án: Tổng điểm tối đa là 700' +
        '<br> 3. Cho vay tín chấp (UPL,thấu chi): Tổng điểm tối đa là 300' +
        '<br> 4. Thẻ tín dụng: Tổng điểm tối đa là 300' +
        '<br> 5. Thẻ ghi nợ: Tổng điểm tối đa là 200' +
        '<br> 6. Huy động/TKTT/Payroll: Tổng điểm tối đa là 500' +
        '<br> 7. Khách hàng MAF: Tổng điểm tối đa là 100' +
        '<br> Điểm trần không áp dụng với các vị trí bán chuyên biệt 1 sản phẩm - được BMT quy định theo từng thời kỳ - chỉ mở trần sản phẩm chuyên biệt.' +
        '<br> - Quy định về tổng điểm giảm ròng tối đa.' +
        '<br> 1. TD VND: Điểm giảm ròng tối đa là -50' +
        '<br> 2. CASA VND: Điểm giảm ròng tối đa là -30' +
        '<br> 3. TD/CASA ngoại tệ: Điểm giảm ròng tối đa là -50');    
    questionAnswer.set('Công thức tính thưởng',' CBBH được tính lương khuyến khích(LKK) theo công thức sau:'+
        '<br> Công thức: LKK = Tổng điểm chi trả * Đơn giá * Hệ số thưởng - Phần trừ' +
        '<br> Trong đó:' +
        '<br> - Đơn giá tiền là đơn giá bậc thang theo khoảng điểm của tổng điểm chi trả.' +
        ' Mỗi vị trí được phân thành các nhóm từ nhóm 1-4. Việc phân nhóm được Giám đốc Khối quy định theo từng thời kỳ. Mỗi nhóm có các khoảng điểm và đơn giá điểm như sau:' +
        '<br> >>>>>>>>>>Nhóm 1: Tính cho CSR<<<<<<<<<<' +
        '<br> A. Điểm sàn: 10.000 VND/Điểm' +
        '<br> B. Điểm vượt sàn' +
        '<br> 1. từ 0 đến 80 điểm: 28.000 VND/Điểm' +
        '<br> 2. từ 80 đến 120 điểm: 45.000 VND/Điểm' +
        '<br> 3. từ 120 đến 180 điểm: 65.000 VND/Điểm' +
        '<br> 4. trên 180 điểm: 80.000 VND/Điểm' +
        '<br> Ví dụ:' +
        '<br> CSR thuộc nhóm I đạt tổng điểm quy đổi là 350 điểm, điểm sàn quy định là 40 điểm.' +
        '<br> Cách tính như sau:' +
        '<br> 40*10.000 + 80*28.000 + 40*45.000 + 60*65.000 + 130*80.000 = 18,740,000 VND');
    questionAnswer.set('Quy định về mức trần lương khuyến khích.','Lương khuyến khích tối đa của mỗi CBBH hàng tháng là 30 triệu VND, áp dụng trước khi tính phần trừ và khấu trừ thuế TNCN (nếu có).' +
        '<br> CBBH được gỡ trần khuyến khích nếu:' +
        '<br> + Đạt 150% KPI trở lên trong tháng tính LKK, gỡ trần chi trả, tối đa 40 triệu;' +
        '<br> + Đạt 180% KPI trở lên trong tháng tính LKK, gỡ trần chi trả tối đa 50 triệu' +
        '<br> Lương khuyến khích bị ảnh hưởng bởi hệ số thâm niên.' +
        '<br> ví dụ: CBBH là nhân viên đang làm việc tháng đầu tiên, hệ số thâm niên 0.5. Vậy mức trần lương khuyến khích của CBBH là 0.5*30 = 15 triệu đồng.');
    questionAnswer.set('Quy định về việc truy thu lương khuyến khích','Các trường hợp nghi ngờ cheating doanh số bán hàng (ví dụ: CBBH có tỷ lệ Card-closed cáo khi phát sinh số ít giao dịch),' +
        'phát sinh thẻ tín dụng Quasi Cash hoặc các trường hợp vi phạm nội quy lao động, vi phạm quy tắc ứng xử, sẽ áp dụng các chế tài truy thu cụ thể theo thông báo từng thời kỳ.');
    questionAnswer.set('Quy định về việc giữ lại lương khuyến khích.','- Lương khuyến khích hàng tháng được chi trả một phần trong tháng, phần giữ lại được chi trả vào cuối năm tài chính nếu CBBH đạt điều kiện quy định.' +
        '<br> Tỷ lệ chi trả hàng tháng và cuối năm được quy định như sau:' +
        '<br> Vị trí: ' +
        '<br> 1. CSR ' +
        '<br> Hàng tháng chi trả 80%, cuối năm chi trả 20% còn lại' +
        '<br> 2. CSM ' +
        '<br> Hàng tháng chi trả 70%, cuối năm chi trả 30% còn lại' +
        '<br> - Điều kiện chi trả phần giữ lại:' +
        '<br> CBBH được chi trả 100% phần giữ lại nếu thoả mãn:' +
        '<br> + CBBH đạt từ 60% KPIs cả năm trở lên và không vi phạm kỷ luật (trừ mức nhắc nhở) theo quy định của VPBank;' +
        '<br> + KPI của DVKH (chi nhánh/trung tâm thế chấp/trung tâm af/phòng bán hàng kênh tín chấp) đạt tối thiểu 80%. Nếu KPI của DVKH đạt dưới 80%, CBBh nhận 50% phần giữ lại.' +
        '<br> + CBBH còn làm việc tại VPBank tính đến hết ngày 31/12 của năm.' +
        '<br> >>>> Áp dụng hế số khả dụng quỹ:' +
        '<br> Hệ số khả quỹ là hệ số nhằm đảm bảo mức sử dụng quỹ Q3 của năm. Trong trường hợp mức chi dự kiến vượt quá số quỹ được sử dụng, hệ số khả quỹ được áp dụng khi thực hiện chi trả phần giứ lại. Hệ số được GĐK ban hành.' +
        '<br> - Tuỳ từng giai đoạn, Giám đốc khối sẽ có thông báo trước về việc tạm giữ một phần hoặc toàn bộ LKK của CBBH'+
        '<br> - Trường hợp CBBH có liên quan đến các vụ việc đang được điều tra làm rõ, toàn bộ lương khuyến khích bán được tạm giữ đến khi có kết luận cuối cùng nhưng không muộn hơn ngày 31 tháng 12 năm phát sinh sự việc điều tra. Sau thời gian này, sẽ áp dụng theo mức vi phạm tại thời điểm chốt năm.');
    questionAnswer.set('Lộ trình thăng tiến','Sơ đồ tháp thăng tiến' +
        '<br> Nhân viên I Thịnh Kiên >>> Nhân viên II Thịnh Kiên >>> Nhân viên VPB >>> CV VPB >>> CVC VPB >>> CVCC VPB' +
        '<br> Lộ trình thăng tiến chỉ áp dụng cho cấp pho quản lý, bao gồm các cấp theo thứ tự thấp đến cao thuộc công ty Thịnh Kiến và VPbank');
    questionAnswer.set('Các quy định chung về xét thăng tiến','- Kỳ xét thăng tiến: Thực hiện xét vào tháng 3,6,9,12 hàng năm.' +
        '<br> - Việc xét thăng tiến được thực hiện dựa trên kết quả KPI của 6 tháng làm việc gần nhất tính đến kỳ xét thăng tiến.' +
        '<br> - Trường hợp CBBH đủ điều kiện thăng tiến, Quyết định thăng tiến có hiệu lực tại tháng T+2 sau khi chốt kết quả kinh doanh xét thăng tiến. CBBH sau khi thăng tiến được hưởng lương và các chế độ đãi ngộ khác tương ứng với chức danh mới theo quy định của VPbank. Thời gian tối thiểu đến kỳ thăng tiến tiếp theo là 6 tháng.' +
        '<br> - Trường hợp CBBH chưa đủ điều kiện thăng tiến trong kỳ được tiếp tục xét thăng tiến trong kỳ tiếp theo.' +
        '<br> - Trường hợp điều chuyển vị trí, thời gian xét thăng tiến tối thiêu là 06 tháng kể từ tháng điều chuyển.' +
        '<br> - Trường hợp CBBH đang ở chức danh CVCC, khi đủ điều kiện thăng tiến 1 cấp trở lên, được điều chỉnh tăng lương (khi chưa vượt quá dải lương).' +
        'Từng trường hợp sẽ được xét duyệt theo đúng nguyên tắc điều chỉnh lương hiện hành của Khối QTNNL.' +
        'br> - Đối với đơn vị có nhu cầu tuyển dụng, ưu tiên lựa chọn các ứng viên là CBBH đủ điều kiện thăng tiến trước khi lựa chọn ứng viên khác.');
    questionAnswer.set('Tiêu chuẩn thăng tiến','- Thăng tiến một cấp: là thăng tiến lên chức danh liền trên theo tháp thăng tiến. CBBH được xét thăng tiến thường nếu:' +
        '<br> + Kết quả KPI trong 6 tháng gần nhất đạt 120;' +
        '<br> + Có tối đa 1 tháng KPI đạt từ 85-95%;' +
        '<br> + Không có tháng nào đạt KPI dưới 85%.' +
        '<br> Với riêng vị trí RM, CBBH được xét thăng tiến thường nếu kết quả KPI trong 6 tháng gần nhất (không xét hai tháng đầu Onboard) nếu:' +
        '<br> + Kết quả KPI trong vòng 6 tháng gần nhất đạt 150%' +
        '<br> + Có tối đa 1 tháng KPI đạt từ 85-95%;' +
        '<br> + Không có tháng nào đạt KPI dưới 85%.');
    questionAnswer.set('Quy định về nhân sự','- Bộ phận tính toán KPI xác định chức danh, vị trí tính chỉ tiêu CBBH căn cứ trên danh sách nhân sự chốt tháng của Khối QTNNl.' +
        '<br> - Với trường hợp điều chuyển chức danh trong tháng:' +
        '<br> + Nếu quyết định có hiệu lực trước ngày 15: tính chỉ tiêu, KPI và thường khuyến khích theo chức danh mới' +
        '<br> + Nếu quyết định có hiệu lực sau ngày 15: tính chỉ tiêu, KPI và thưởng khuyến khích theo chức danh cũ.' +
        '<br> + Nguyên tắc trên có thể được thay đổi cho một số trường hợp đặc biệt được phê duyệt bởi cấp có thầm quyền' +
        '<br> - Các trường hợp có quyết định Nghỉ việc/Quyết định chấm dứt hợp đồng lao động: Chi trả toàn bộ phần thưởng khuyến khích phát sinh trong thời gian CBBH làm việc tại VPBank, không bao gồm phần giữ lại theo quy định.' +
        '<br> - Với số ngày công tiêu chuẩn là 24 , các trường hợp nhân sự hiện hữu có số ngày làm việc thực tế lớn hơn 50% tổng số ngày làm việc trong tháng: tính chỉ tiêu, doanh số và ghi nhận KPI như bình thường. Ngược lại, khi số ngày làm việc thực tế nhỏ hơn 50% tổng số ngày làm việc trong tháng: Không ghi nhận chỉ tiêu, doanh số, KPI.' +
        '<be> - Với nhân sự Onboard mới, có số ngày làm việc thực tế nhỏ hơn 50% ngày công tiêu chuẩn, CBBH nhận chỉ tiêu, KPI và thưởng khuyến khích như bình thường. Trong trường hợp CBBH có đè xuất không xét KPI, toàn bộ chỉ tiêu, kết quả KPI và phần thưởng khuyến khích đi kèm được loại bỏ khỏi báo cáo trong tháng Onboard.');
    questionAnswer.set('Quy định về làm tròn','- Năng suất lao động tiêu chuẩn sau khi nhân hệ số được làm tròn lên (roundup) đến một chũ số thập phân' +
        '<br> Ví dụ:' +
        '<br> 8.32 được làm tròn là 8.4' +
        '<br> - Lương khuyến khích bán và các hình thức thưởng tiền mặt của cán bộ được làm tròn đến đơn vị đồng.');
    questionAnswer.set('Quy định luồng trình ngoại lệ ','- Tất cả các đề xuất ngoại lệ (nếu có), BMT là đầu mối tiếp nhận từ cán bộ quản lý là Teamlead (đối với kênh tín chấp), hoặc Giám đốc Chi nhánh/GĐTT AF/GĐTT Thế chấp (đối với kênh chi nhánh) trở lên. Mọi đề xuất ngoại lệ không qua BMT xác nhận sẽ không có hiệu lực thi hành.' +
        '<br> BMT không tiếp nhận và xử lý các yêu cầu tra soát/trình ngoại lệ nào của CBBH nếu vị phạm các quy định sau:' +
        '<br> + Gửi yêu cầu tra soát/trình ngoại lệ không đúng mail hướng dẫn, không đúng mốc thời gian BMT thông báo' +
        '<br> + Những lỗi ĐVKD có thể chủ động kiểm tra và điều chỉnh trong tháng' +
        '<br> + Ngoại lệ các lỗi vi phạm lý do chủ quan từ CBBH: không nắm được quy trình/quy định, nhập liệu sai DAO.');
    questionAnswer.set('Quy định về thẩm quyền phê duyệt','- Giám đốc Khối KHCN có thẩm quyền phê duyệt các điều chỉnh/ngoại lệ đảm bảo đi đúng hướng kinh doanh của ngân hàng, mô hình bán theo chức danh và đảm bảo ngân sách được phê duyệt ' +
        '<br> Đối với việc phê duyệt kết quả lương khuyến khích và các hình thức thường định kỳ: Trung tâm BMT trình cấp lãnh đạo có thẩm quyền xem xét phê duyệt kết quả trên cơ sở tính toán của đơn vị cung cấp' +
        '<br> Đối với các trường hợp ngoại lệ thưởng, thẩm quyền phê duyệt đươc quy định như được hướng dẫn');
    questionAnswer.set('Đối tượng áp dụng CBQL tính Incentive','Đối tượng áp dụng CBQL DVKH tính Incentive là CSM');
    questionAnswer.set('Các nguyên tắc chung tính Incentive cho CBQL DVKH','- LKK áp dụng cho các vị trí căn cứ vào tỷ lệ hoàn thành KPIs.' +
        '<br> - Mức lương khuyến khích bán tối đa/cán bộ/tháng: 30 triệu VND.' + 
        '<br> Đây là mức lương khuyến khích bán trước khi tính điểm trừ thuế TNCN - nếu có. Quy định về trừ lương khuyến khích bán sẽ được quy định từng thời kỳ hoặc theo quy định về xử lý vi phạm khác của VPBank do hội đồng xứ lý kỷ luật hoặc người có thầm quyền quyết định.');
    questionAnswer.set('Quy định chi trả lương khuyến khích cho CBQL','Năm 2023, các chính sách chi trả sẽ được đồng bộ tương đương với các vị trí tại Khối, bao gồm chính sách giữ lại và quy định về chi trả phần giữ lại cuối năm.' +
        '<br> Nếu cán bộ chính thức nghỉ việc thì lương khuyết khích bán của tháng nghỉ việc không được chỉ trả.' +
        '<br> Nhân sự thuộc quản lý của các vị trí quản lý là số lượng nhân sự thực tế còn làm việc tại thời điểm cuối tháng tính LKK. Trong trường hợp CBBH điều chuyển đơn vị trong tháng tính LKK:' +
        '<br> - Quyết định điều chuyển có hiệu lực trước ngày 15: nhận sự thuộc đơn vị sau điều chuyển;'+
        '<br> - Quyết định điều chuyển có hiệu lực sau ngày 15: nhân sự thuộc đơn vị trước điều chuyển.' +
        '<br> Hiện tại đang tính LKD tháng 5/2022 cho CBQL thì sẽ không tính lại LKD tháng 4/2022 cho CBQL nếu có sự thay đổi về LKD của CBBh trực thuộc.');
    questionAnswer.set('Các vị trí thuộc nhóm 1 tính LKD','Các vị trí thuộc nhóm 1 là tính LKD: CSR, UPL Digital backend, FSA_CL, DSA CC Province, CFT TSĐB, CFT PNT, CFT NEO, CFT AIA, CFT AF, LS Hub-Telesale');
    questionAnswer.set('Các vị trí thuộc nhóm 2 tính LKD','Các vị trí thuộc nhóm 2 là tính LKD: TLS 247, RO, DSA Premium, DSA CC HN-HCM, CC Digital backend, PSE UPL Deaura');
    questionAnswer.set('Các vị trí thuộc nhóm 3 tính LKD','Các vị trí thuộc nhóm 3 là tính LKD: Telecaller, RO Secured, MSO , DSA OM, Digital UPL, Digital CC, CFT_DC_5, CFT_DC_4, CFT_DC_3, CFT_DC_2, CFT_DC_1, CCA OM, RM Prime Province, RM Prime HN-HCM, LS Hub - Province - Auto');
    questionAnswer.set('Các vị trí thuộc nhóm 4 tính LKD','Các vị trí thuộc nhóm 4 là tính LKD: LS Branch HN- HCM, LS Branch Province, LS Hub - Biz & Housing, LS - Project, LS Hub - Province - Mix, LS Hub - Race');
    questionAnswer.set('Đơn vị BMT (chính sách/sản phẩm)','1.Vương' +
        '<br> 2. Trang');
    questionAnswer.set('Đơn vị BSC-HO (nghiệp vụ)','1.KPI: NHANNC');
    questionAnswer.set('Đơn vị EDA - BIC (số liệu)','1.KPI: BINHNT66' +
        '<br> 2. KPI/INCENTIVE: LUONGLV');
    return questionAnswer  ;
    /*<br> 1. CHÍNH SÁCH VÀ QUY ĐỊNH +
    <br> 2. SẢN PHẨM, RULE GHI NHẬN +
    <br> 3. TRA SOÁT KPI VÀ INCENTIVE +
    <br> 4. CONTACT STAKEHOLDER ;*/
}

function chuanHoa(input){
    input = input.toLowerCase();
    input = input.trim();
    input = input.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,' ');
    input = input.replace(/\s\s+/g,' ');

    return input;
}


function getBotResponse1(input) {
    //rock paper scissors
    /*if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return ["rock",
        "\n rockerpable"];
    }*/
    input = input.toLowerCase();
    const clientQuestionArray1 = input.split(" ");

if(isMatch(clientQuestionArray1,'Hello How are you?')){
   return "Xin chào! Tôi có thể giúp gì cho bạn?";
}
    // Simple responses
    /*if (input == "Hi") {
        return "Xin chào! Tôi có thể giúp gì cho bạn?";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    }*/

}


function isMatch(clientQuestionArray1,question1) {
    question1 = question1.toLowerCase();
    for(let i = 0; i < clientQuestionArray1.length; i++) {
        if(question1.includes(clientQuestionArray1[i])) return true;
    }
   
    return false;
}




function isMatchFull(input,question1) {
    question1 = question1.toLowerCase();
    if(question1.includes(input)) return true;
    
    return false;
}


function getAnswer(input){
    document.getElementById("textInput").value = input;
      document.getElementById("chat-icon-send").click();
}











