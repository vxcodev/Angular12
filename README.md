# Angular Tutorial
## Lý thuyết
### Component
```
- Component đươc cấu trúc là các folder, bao gồm 4 thành phần chính sau:
 + TenComponent.component.html : Chứa code giao diện
 + TenComponent.component.scss : Chứa code css
 + TenComponent.component.ts : Chứa code tscript
 + TenComponent.component.spec.ts : Sử dụng để test
- Lệnh tạo component: ng g c tenComponent . Tạo 1 component trong thư mục src/app
```
### Module
```
- Các component được khai báo trong
    @NgModule({
        declarations: [
            // Khai báo component; vd: HomeComponent
        ],
        imports: [
            ....
        ],
        .....
    })
- Gom các component vào thành các module, để tùy dịch vụ nào sử dụng thì sẽ lazy load module đó ra sử dụng    
- Thường chỉ làm việc trên 2 file: component.html và component.ts
- Binding Value là giá trị truyền từ component.ts sang component.html
```
