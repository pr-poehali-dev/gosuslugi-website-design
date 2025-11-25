import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    { id: 1, type: 'Паспорт РФ', series: '1234', number: '567890', status: 'Активен', icon: 'CreditCard' },
    { id: 2, type: 'СНИЛС', number: '123-456-789 00', status: 'Активен', icon: 'FileText' },
    { id: 3, type: 'ИНН', number: '123456789012', status: 'Активен', icon: 'Receipt' },
  ];

  const services = [
    { id: 1, title: 'Получить справку', description: 'О составе семьи, доходах', icon: 'FileCheck', color: 'bg-blue-500' },
    { id: 2, title: 'Записаться к врачу', description: 'Запись в поликлинику', icon: 'Stethoscope', color: 'bg-green-500' },
    { id: 3, title: 'Оплата штрафов', description: 'ГИБДД, налоги', icon: 'DollarSign', color: 'bg-orange-500' },
    { id: 4, title: 'Подать заявление', description: 'В органы власти', icon: 'FileSignature', color: 'bg-purple-500' },
  ];

  const payments = [
    { id: 1, title: 'Оплата ЖКХ', amount: '5 420 ₽', date: '15.11.2025', status: 'Оплачено' },
    { id: 2, title: 'Штраф ГИБДД', amount: '500 ₽', date: '10.11.2025', status: 'Оплачено' },
    { id: 3, title: 'Госпошлина', amount: '2 000 ₽', date: 'Не оплачено', status: 'Ожидает' },
  ];

  const applications = [
    { id: 1, title: 'Замена паспорта', date: '20.11.2025', status: 'В обработке', number: '№ 2024-11-001' },
    { id: 2, title: 'Регистрация по месту жительства', date: '15.11.2025', status: 'Одобрено', number: '№ 2024-11-002' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <img 
                  src="https://cdn.poehali.dev/files/455614a3-9e79-47df-9b4f-72f0db8ccf2b.jpg" 
                  alt="Госуслуги логотип" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Госуслуги</h1>
                <p className="text-sm text-gray-600">Официальный портал</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Поиск услуг, документов..."
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="services" className="flex flex-col gap-1 py-3">
              <Icon name="Grid3x3" size={20} />
              <span className="text-xs">Услуги</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex flex-col gap-1 py-3">
              <Icon name="FileText" size={20} />
              <span className="text-xs">Документы</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex flex-col gap-1 py-3">
              <Icon name="FileCheck" size={20} />
              <span className="text-xs">Заявления</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex flex-col gap-1 py-3">
              <Icon name="CreditCard" size={20} />
              <span className="text-xs">Платежи</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200">
                  <CardHeader>
                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon name={service.icon} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="Sparkles" size={24} />
                  Популярные услуги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="secondary" className="h-auto py-4 flex flex-col items-start bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="Car" size={20} className="mb-2" />
                    <span className="font-semibold">Штрафы ГИБДД</span>
                    <span className="text-xs text-white/80">Проверка и оплата</span>
                  </Button>
                  <Button variant="secondary" className="h-auto py-4 flex flex-col items-start bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="Building" size={20} className="mb-2" />
                    <span className="font-semibold">Налоги</span>
                    <span className="text-xs text-white/80">Узнать задолженность</span>
                  </Button>
                  <Button variant="secondary" className="h-auto py-4 flex flex-col items-start bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="GraduationCap" size={20} className="mb-2" />
                    <span className="font-semibold">Образование</span>
                    <span className="text-xs text-white/80">Запись в детский сад</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Мои документы</span>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить
                  </Button>
                </CardTitle>
                <CardDescription>Все ваши документы в одном месте</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon name={doc.icon} className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{doc.type}</h3>
                        <p className="text-sm text-gray-600">
                          {doc.series ? `${doc.series} ` : ''}{doc.number}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={doc.status === 'Активен' ? 'default' : 'secondary'} className="mb-2">
                        {doc.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Открыть
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Мои заявления</span>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новое заявление
                  </Button>
                </CardTitle>
                <CardDescription>История поданных заявлений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="flex items-start justify-between p-4 border-2 rounded-xl hover:border-blue-200 transition-colors">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="FileSignature" className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{app.number}</p>
                        <p className="text-xs text-gray-500">Подано: {app.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={app.status === 'Одобрено' ? 'default' : 'secondary'}
                        className={app.status === 'В обработке' ? 'bg-orange-500' : ''}
                      >
                        {app.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>История платежей</span>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый платеж
                  </Button>
                </CardTitle>
                <CardDescription>Все платежи и задолженности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border-2 rounded-xl hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Icon name="DollarSign" className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{payment.title}</h3>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold mb-2">{payment.amount}</p>
                      <Badge
                        variant={payment.status === 'Оплачено' ? 'default' : 'destructive'}
                      >
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="AlertCircle" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Есть неоплаченные счета</h3>
                      <p className="text-sm text-white/80">Госпошлина • 2 000 ₽</p>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-white/90">
                    Оплатить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t border-blue-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">О портале</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">О проекте</a></li>
                <li><a href="#" className="hover:text-blue-600">Новости</a></li>
                <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Помощь</a></li>
                <li><a href="#" className="hover:text-blue-600">Инструкции</a></li>
                <li><a href="#" className="hover:text-blue-600">Обратная связь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Документы</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-blue-600">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Приложение</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Smartphone" size={16} className="mr-2" />
                  App Store
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Smartphone" size={16} className="mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            <p>© 2025 Госуслуги. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;