from django.urls import path
from core.views import user_views as views

urlpatterns = [
    path('', views.getUsers, name='users'),
    path('profile/', views.getUserProfile, name='profile'),
    path('register/', views.registerUser, name='register'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]