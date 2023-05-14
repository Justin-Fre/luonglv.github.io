function getBotResponse(input) {
    //rock paper scissors
    /*if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return ["rock",
        "\n rockerpable"];
    }*/

    // Simple responses
    if (input == "Xin chào") {
        return "Xin chào! Tôi có thể giúp gì cho bạn?";
    /*} 
    else if (input == "goodbye") {
        return "Talk to you later!";
    */}
    else if (input == "DAO là gì?")  {
        return "DAO là mã cán bộ bán hàng,Mã cán bộ bán hàng lấy theo dữ liệu DAO cập nhật trên hệ thống dựa theo file nhân sự HR gửi hàng tháng. Đây là thông tin quan trọng để lấy số lượng sản phẩm bán.MAP thông tin mã Staff ID trên file nhân sự và mã Staff ID trên dữ liệu DAO( TH không map được DAO sẽ có dữ liệu)";
    } 
    else if (input == "DAO CIF là gì?") {
        return "DAO CIF là mã cán bộ bán hàng gắn trên CIF khách hàng.";
    } 
    else if (input == "DAO sản phẩm là gì?") {
        return "DAO SP là mã cán bộ bán hàng gắn trên sản phẩm";
    }
    else if (input == "DAO quản lý/DAO định danh/DAO phân khúc là gì?") {
        return "Mã cán bộ quản lý KH. Theo phân khúc MAF-> DAO quản lý = PB DAO. AF -> DAO quản lý = RM DAO";
    }
    else if (input == "OPEN Branch ID là gì?") {
        return "Là Mã chi nhánh mở," +
        " mã chi nhánh mở/bán sản phẩm";
    }
    else if (input == "Chi nhánh định biên là gì?") {
        return "Là Chi nhánh làm việc " +
        ", chi nhánh mà DAO thực tế làm việc";
    }
    else if (input == "BSC Branch ID là gì?") {
        return "Là Mã chi nhánh tính cho BSC " +
        ", Tùy vào từng sản phẩm sẽ ghi nhận cho chi nhánh như sau:" +
        " CIF mở mới: ghi nhận theo CN mở CIF." +
        " TD offline: ghi nhận theo CN mở TD." +
        " TD online: ghi nhận thoe CN DAO làm việc tại thời điểm mở. Nếu không xác đinh được sẽ tính cho CN mà TD đang được gán."+
        " VPO: ghi nhận về cho CN mà DAO được gán đang làm việc tại thời điểm kích hoạt." +
        " Thẻ IDC/CC: ghi nhận về cho CN được gán DAO đang làm việc tại thời điểm ghi nhận." +
        " Các sản phẩm khác: ghi nhận về CN mở.";
    }
    else if (input == "Khu vực working là gì?") {
        return "Là khu vực làm việc " +
        ", ghi nhận theo BSC Branch ID và bảng phân khu vực do BSC gửi";
    }
    else if (input == "Tập khách hàng BSC quản lý?") {
        return "Là khách hàng BSC quản lý và  được tính chỉ tiêu TD cuả các tài khoản TD gắn với tập này " +
        ", tập khách hàng bao gồm 2 phần:" +
        " Tập khách hàng BSC được phân bổ vào tháng 03 trong năm (hoặc tuỳ theo chính sách từng năm)." +
        " Tập khách hàng mới trong năm báo cáo và có gắn DAO CIF là DAO CSR";
    }
    else if (input == "Target của từng chỉ tiêu là gì?") {
        return "Là mức NSLĐ tiêu chuẩn bán của từng chỉ tiêu" +
        ", mức NSLĐ bán tiêu chuẩn để hoàn thành 100% chỉ tiêu được giao. Mức NSLĐ tiêu chuẩn bán của vị trị các vị trí CSR bị ảnh hưởng bởi các hệ số:" +
        "Hệ số chức danh, hệ số thâm niên, hệ số vùng miền, hệ số đặc biệt(nếu có), hệ số dặc thù, hệ số mùa vụ" +
        "-> Mức NSLĐ bán tiêu chuẩn trên Saletool do BSC HO gửi cho BIC hàng kỳ hoặc khi có sự thay đổi.";
    }
    else if (input == "TD là gì?") {
        return "Term Deposit " +
        ", là tài khoản tiết kiệm có kỳ hạn" + 
        ", Note: RULE ghi nhân DAO theo thứ tự ưu tiên như sau:" +
        ", TD của tập KH do BSC quản lý: Ghi nhận theo DAO CIF" +
        ", TD của tập KH MASS: ghi nhận theo DAO SP" +
        ", TD của tập KH AF, MAF:" +
        " Trong tháng định danh: ghi nhận theo DAO SP " + 
        " nếu sau tháng định danh: ghi nhận theo DAO quản lý (PB_DAO(KH MAF)" +
        " hoặc RM DAO (KH AF)" +
        ", TD của tập KH refer: ghi nhận theo DAO refer = DAO sp";
    }
    else if (input == "EOP là gì?") {
        return "Số dư TD cuối kỳ " +
        ", là số dư tài khoản tiết kiệm (TD) tại thời điểm cuối kỳ. Nếu TD đã đóng tại cuối kỳ thì số dư cuối kỳ = 0";
    }
    else if (input == "ADB là gì?") {
        return "Số dư TD bình quân trong kỳ " +
        ", là số dư TD trung bình trong kỳ được tính" +
        " Ví dụ: Tổng(Giá trị TD từ ngày 1-n)/Tổng số ngày trong kỳ." +
        " ex1: TD1 có giá trị ngày 1-10: 100 triệu, ngày 11-20: 101 triệu, ngày 21-31: 105 triêu" +
        " >>> ADB TD1 = ((100*10) + (101*10) + (105*11))/31 = 102.097" +
        " ex2: TD2 có giá trị ngày 1-20: 101 triệu, tất toán vào này 21" +
        " >>> ADB TD2 = ((101*20) + (0*11))/31 = 65.16";
    }
    else if (input == "EOP TD tăng ròng là gì?") {
        return "Là tăng ròng số dư TD cuối kỳ " +
        ", là giá trị tăng ròng số dư TD trung bình của tài khoản tại kỳ báo cáo so với kỳ trước đó." +
        " Chỉ tiêu này được tính cho vị trí CSM, KSV." +
        " Cách tính: EOP kỳ báo cáo - EOP kỳ báo cáo liền kề trước";
    }
    else if (input == "ADB TD tăng ròng là gì?") {
        return "Là tăng ròng số dư TD trung bình " +
        ", là giá trị tăng ròng số dư TD trung bình của tài khoản tại kỳ báo cáo so với kỳ liền trước. Chỉ tiêu này được tính cho vị trí CSR." +
        " Cách tính: ADB kỳ báo cáo -  ADB kỳ báo cáo liền kề trước" ;
    }
    else if (input == "Doanh thu thuần là gì?") {
        return "Là tổng phí bảo hiểm nhân thọ AIA nhân với tỷ lệ quy định từ BMT" +
        ", là tổng phí bảo hiểm hiểm nhân thọ thực thu của KH (bao gồm phí bảo hiềm sản phẩm chính" +
        ", phí bổ sung và phí TOPUP của SP (ILP3) trong kỳ. Bao gồm 2 phần:" +
        " Phí bảo hiểm mới trong kỳ và Phí bảo hiểm huỷ trong kỳ." +
        " Cách tính: ( Phí bảo hiểm bán mới trong kỳ - Phí bảo hiểm huỷ trong kỳ) * 53.9%";
    }
    else if (input == "Tài khoản số đẹp là gì?") {
        return "Là tài khoản mở mới trong tháng, là tài khoản số đẹp và có phí phát sinh" +
        " Cách tính: fee_amt>0" ;
    }
    else if (input == "VPO kích hoạt là gì?") {
        return "Là tài khoản VPbank Neo kích hoạt mới " +
        " Cách ghi nhận: thoả mãn điều kiện sau đây" + 
        " Tài khoản được Active và KYC cùng tháng hoặc tài khoản KYC trước, Active sau tính theo thời gian active" +
        " Tài khoản được Active trước và KYC sau, tính theo thời gian KYC thành công" +
        " Tài khoản của KH mở CIF trươds 03/2020 và có cust Type khác (174,181) và được Active trong kỳ"+
        " Không ghi nhận các trường hợp khi Open_DAO null" +
        " Nếu Open_DAO # Activeted_DAO bắt thêm điều kiện ngày kích thước trừ ngày mở phải lớn hoặc bằng 2 ngày ghi nhận DAO kích hoạt (Activated_DAO)";
    }
    else if (input == "Thẻ IDC/CC là gì?") {
        return "Là thẻ ghi nợ quốc tế, thẻ tín dụng" +
        " Cách ghi nhận: - Thẻ vật lý hoạt động trong vòng 3 tháng kể từ thời điểm phát hành" +
        " - Thẻ phi vật lý hoạt động và thẻ vật lý kích hoạt trong vòng 3 tháng kể từ thời điểm phát hành." +
        " + Thẻ hoạt động là thẻ có phát sinh giao dịch chi tiêu(đối với thẻ CC) hoặc thẻ có chi tiêu qua POS," +
        " chi tiêu online, rút tiền tại ATM ( đối với thẻ IDC) và được hạch toán thành công trên Way4" +
        " + Ghi nhận theo tháng phát sinh giao dịch chi tiêu" +
        " + Thẻ còn ở trạng thái Card OK tại kỳ báo cáo" +
        " + Không tính thẻ wasi" +
        " + Không tính thẻ phụ ( đối với thẻ CC) và thẹ phụ KH Mass(đối với thẻ IDC) vào KPI" +
        " + Ghi nhận tối đa 5 thẻ phụ IDC/CIF KH với thẻ IDC, tối đa 2 thẻ phụ/CIF KH với thẻ CC";
    }
    else if (input == "OD là gì?") {
        return "Là hợp đồng thấu chi mới có phát sinh số dư âm qua đểm trong vòng 2 tháng liền kề từ tháng cấp hạn mức thấu chi. Chỉ ghi nhận tài khoản được cấp thấu chi 1 năm 1 lần" ;
    }
    else if (input == "Bảo hiểm phi nhân thọ là gì?") {
        return "Là sản phẩm bảo hiểm phi nhân thọ được tính theo quy định cảu bảo hiểm" +
        " từng kì. Hiện tại chỉ tính sản phẩm bảo hiểm sức khoẻ";
    }
    else if (input == "UPL là gì?") {
        return "Là vay tín chấp cá nhân. Ghi nhận theo dư nợ giải ngân mới trong kỳ";
    }
    else if (input == "Trái phiếu là gì?") {
        return "Là hợp đồng trái phiếu bán mới trong tháng";
    }
    else if (input == "LOP là gì?") {
        return "Loan On Phone là giao dịch rút tiền mặt qua tổng đài 24/7 trong thời gian 3 ngày "+
        " kể từ ngày CBBH chốt đăng ký giao dịch trên CRM" +
        " .Code nhận dạng: Status in ('OPEN','PAIDPART','WAITING','OVD') AND TRANS_TYPE_DETAIL ='LOP' AND TRANS_TYPE IS NULL";
    }
    else if (input == "PAYROLL là gì?") {
        return "Là tài khoản trả lương mở mới không qúa 3 năm (tính đến năm xét KPI)," +
        " mở kèm VPBank NEO kích hoạt và tổng giao dịch đổ lương tối thiểu 6 triệu trong tháng báo cáo."+
        " Product_name = '1. Term deposit' and  category = '1015' and bal_qd >= 6e6'" +
        " and dateiff(day,openning_date,getdate()) <= 1095";
    }
    else if (input == "Vay cầm cố Bond là gì?") {
        return "Ghi nhận theo dư nợ giải ngân mới trong tháng tính thưởng." +
        " Code nhận dạng: Product_code =. 'LDS04029";
    }
    else if (input == "FX là gì?") {
        return "Foreign Exchange. Trao đổi ngoại hối hay tiền tệ quốc tế" +
        " Code nhận dạng: DAO is not null and  [FX_FO (QUY ĐỔI)] >= 3 triệu and [Mục đích] <> N'KH mua/bán tiền mặt'";
    }
    else if (input == "CASA chất lượng 2 triệu là gì?") {
        return " Là tài khoản thanh toán, trong vòng 12 tháng kể từ thời điểm mở tài khoản, có ít nhất 1 tháng có SDBD CASA của tài khoản đạt tối thiểu  2 triệu." +
        " Code nhận dạng: Product_name =. '1.Current account' and ccy = 'vnd' and avgbal_qd >= 2*1e7";
    }
    else if (input == "Hệ số khu vực là gì?") {
        return "Là hệ số phụ thuộc vào khu vực địa lý, được GĐK ban hành theo từng tời kỳ" +
                "(Hà Nội,Hồ Chí Mình,Tỉnh)";
    }
    else if (input == "Hệ số chức danh là gì?") {
        return "Là hệ số liên quan đến chức danh của cán bộ bán" +
        " (CVT1, CVT2, Nhân viên, Chuyên viên, Chuyên viên chính, Chuyên viên cao cấp bậc 7,8)";
    }
    else if (input == "Hệ số thâm niên là gì?") {
        return "Là hệ số hỗ trợ chỉ tiêu cho các chức danh mới bắt đầu làm việc tại VPBANK" +
        " hoặc điều chuyển nội bộ từ vị trí Back office sang lực lượng bán hàng" +
        " (thử việc, chính thức).";
    }
    else if (input == "Hệ số mùa vụ là gì?") {
        return "Là hệ số điều chỉnh theo từng tháng phù hợp với thị trường ";
    }
    else if (input == "Hệ số đặc biệt là gì?") {
        return "Là hệ số điều chỉnh đặc biệt được áp dụng theo các giai đoạn kinh doanh khó khăn, các tình huốn " +
        "bất khả kháng do thiên tai/dịch bệnh ... được quyết định bởi Giám đốc Khối KHCN";
    }
    else if (input == "Hệ số đặc thù là gì?") {
        return "Là hệ số áp dụng đối với CSR được phân công thực hiện một số công việc" +
        "đặc thù khác. Bảng hệ số sẽ căn cứ trên vị trí công việc đặc thù, được quy định" +
        " chi tiết khi ban hành bộ KPI và hướng dẫn đánh giá chi tiết KPI của DVKHCN, " +
        " được GĐK uỷ quyền  cho GĐTTBSC quyết định theo từng thời kỳ. Bảng phân nhóm" +
        " theo vị trí công việc đăc thù (theo phụ lục số 03)";
    }
    else if (input == "Khách hàng New-to-bank là gì?") {
        return "Là khách hàng mới mở CIF trong vòng n-3 tháng";
    }
    else if (input == "Khách hàng hiện hữu (ETB) là gì?") {
        return "Là khách hàng mới mở CIF quá n-3 tháng";
    }
    else if (input == "Khách hàng hiện hữu (ETB) là gì?") {
        return "Là khách hàng mới mở CIF quá n-3 tháng";
    }
    else if (input == "Khách hàng ngủ đông là gì?") {
        return "Là khách hàng mở CIF ít nhất 12 tháng trước tháng báo cáo (từ tháng n-13 trở về trước)" +
        "và không có giao dịch chủ động từ tháng n-12 đến tháng n-13." +
        "Ví dụ: Tháng báo cáo là tháng 1/2023. KH cần thoả mãn điều kiện:" +
        "- Không có giao dịch chủ động từ tháng n-2 (tháng 11/2022)" +
        " đến tháng n-13 (tháng 12/2021)" +
        "- CIF mở ít nhất 12 tháng trước tháng báo cáo: mở CIF từ ngày31/12/2021 về trước.";
    }
    else if (input == "Vay mua nhà là gì?") {
        return "Ghi nhận theo dư nợ giải ngân mới trong kỳ tinh thưởng." +
        "-Đối với giải ngân theo tiến độ: Ghi nhận theo dư nợ giải ngân trong kỳ tính thưởng." +
        "-Trong một số trường hợp, khoản vay được áp dụng hệ số điều chỉnh riêng theo xác nhận của Trung tâm sản phẩm thế chấp nhưng không vượt quá 0.5."+
        "-Các hợp đồng giải ngân vay đặt cọc mua nhà có thời hạn vay từ 6 tháng: ghi nhận 65% số tiền giải ngân khoản vay, phần còn lại ghi nhận tại giai đoạn giải ngân hợp đồng mua bán.";
    }
    else if (input == "Vay mua ô tô, tiêu dùng là gì?") {
        return "Ghi nhận theo dư nợ giải ngân mới trong kỳ tính thưởng.";
    }
    else if (input == "Vay kinh doanh là gì?") {
        return "Vay theo món: Ghi nhận theo dư nợ giải ngân mới trong tháng."+
        "Vay theo hạn mức: Ghi nhận theo dư nợ giải ngân mới trong tháng.";
    }
    else if (input == "UPL HKD là gì?") {
        return "Ghi nhận theo dư nợ giải ngân mới trong kỳ tính thưởng";
    }
    else if (input == "Khách hàng AF là gì?") {
        return "Là KHUT có Segment = 'AF' trên T24" +
        "KHUT được chia thành các nhóm:" +
        "- KHUT mới New-to-bank (NTB): Là KH New-to-bank định danh Preferred/Private" +
        "(theo định nghĩa AUM và CASA) trong tháng. Nếu KH được định danh và kích hoạt" +
        "thành công VPBANK NEO: ghi nhận 100% điểm định danh; Nếu KH chưa kích hoạt thành công" +
        "VPBANK NEO: ghi nhận 50% điểm định danh;" +
        "-KHUT ngủ đông (Dormant): Là khách hàng ngủ đông kích hoạt lại và được định danh Preferred/Private" +
        "(theo định nghĩa AUM và CASA) trong tháng;" +
        "-KHUT trải nghiệm: chỉ tính điểm cho vị trí Tele AF"+
        "Tiêu chí liên quan đến KH AF mới chỉ ghi nhận KH NTB và ngủ đông kích hoạt lại.";
    }
    else if (input == "Khách hàng MAF là gì?") {
        return "là KH có Segment = 'MAF' trên T24. KH MAF gồm"+
        "các nhóm tương tự KH AF. Tiêu chi liên quan đến KH MAF mới chỉ ghi nhận KH NTB và ngủ đông kích hoạt lại.";
    }
    else if (input == "Khách hàng và HĐ NTB - UPL hộ kinh doanh là gì?") {
        return "KH mới HHB: KH chưa từng vay tại TDTT hoặc vay tại khoản vay mới tại trung tâm TDTT" +
        "sau 180 ngày kể từ ngày tất toán khoản vay cũ." +
        "Trường hợp khoản vay đầu của khách mới bị huỷ, các khoản vay ngay tiếp theo của khách hàng vẫn được gọi là KH mới." +
        "KH hiện hữu HHB: là khách hàng đang được sử dụng sản phẩm vay cảu TT TDTT hoặc vay mới tại trung tâm"+
        "trong vòng 180 ngày kể từ ngày tất toán khoản vay cũ." +
        "Hợp đồng NTB là hợp đồng giải ngân từ KH mới HHB.";
    }
    else if (input == "Merchant - Hộ kinh doanh là gì?") {
        return "Cá nhân hoặc tổ chức có mối quan hệ và thực hiện giới thiệu các hộ tiêu thưởng" +
        "trên địa bản đồng thời liên kết thành công với Trung tâm TDTT-Khối KHCN. Khối KHCN. Merchant" +
        "active là merchant có khách hàng được giới thiệu giải ngân thành công";
    }
    else if (input == "Product holding(PH) là gì?") {
        return "Là bình quân số lượng sản phẩm đang sử dụng của khách hàng,tính trên tập khách hàng do CBBH thực hiện"+
        "giải ngân mới trong tháng. Nguyên tắc đếm số lượng sản phẩm tuẩn theo quy định chung về cách tính" +
        "Product Holding của Khối KHCN. Cách tính tỷ lệ hoàn thành chỉ tiêu: Bằng số PH" +
        "thực hiện/PH kế hoạch. Mức chặn trần và chặn sàn của tiêu chí tuân theo quy định về nguyên tắc tính KPI cho các vị trí"+
        "bán hàng. Chi tiêu PH tính trên các KH giải ngân trong tháng không bị ảnh hưởng bới các"+
        "hệ số ảnh hưởng NSLĐ tiêu chuẩn.";
    }
    else {
        return "Try asking something else!";
    } 
}


function isMatch(clientQuestionArray1,question1) {

    for(let i = 0; i < clientQuestionArray1.length; i++) {
        if(question1.includes(clientQuestionArray1[i])) return true;
    }
   
    return false;
}

let input = "DAO là";
const clientQuestionArray1 = input.split(" ");


var question = "DAO là gì?"

if(isMatch(clientQuestionArray1, question)){
    console.log("oke");
}

