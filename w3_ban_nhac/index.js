var vnf_regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
var mobile = 'aaa@gmail.com.vn';
if (mobile !== '') {
    if (vnf_regex.test(mobile) == false) {
        console.log('Số điện thoại của bạn không đúng định dạng!');
    } else {
        console.log('Số điện thoại của bạn hợp lệ!');
    }
} else {
    console.log('Bạn chưa điền số điện thoại!');
}