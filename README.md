# Dinamik-Programlama

Amacımız elimizdeki işleri makinelerde en hızlı şekilde bitirebilmek, bir üretimde işleri makinelerde nasıl sırayla yapacağımızı ve makineler arası geçişin nasıl daha hızlı olacağını bulmamıza yardımcı oluyor
İlk iş için, hangi makineyi kullanacağımıza bakmadan, sadece işin süresi ne kadar sürüyorsa onu alıyoruz. Ama sonraki işlerde, bir makineden diğerine geçerken bir geçiş maliyeti oluyor ve bu da zamanımızı etkiliyor.
![image](https://github.com/user-attachments/assets/4a6516f6-6fb9-4b13-a16a-9180091c62d3)

-Burada HER İŞ ve MAKİNE için minimum süre hesaplanır. İlk iş doğrudan alınır, sonraki işler için geçiş maliyeti eklenir O(n.m^2). Dinamik programlama ile en kısa toplam süre bulunur.

**Kısaca**

Geçiş maliyetlerini ve işlem sürelerini dikkate alarak, sistemin toplamda en az sürede çalışmasını sağladık

![image](https://github.com/user-attachments/assets/6f12598f-14a5-4e6f-a19d-9f03496ba22e)
