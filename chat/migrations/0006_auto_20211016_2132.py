# Generated by Django 2.2.15 on 2021-10-17 04:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0005_auto_20211016_1537'),
    ]

    operations = [
        migrations.AddField(
            model_name='privatechatroom',
            name='connected_users',
            field=models.ManyToManyField(blank=True, related_name='connected_users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='privatechatroom',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='UnreadChatRoomMessages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0)),
                ('most_recent_message', models.CharField(blank=True, max_length=500, null=True)),
                ('reset_timestamp', models.DateTimeField()),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room', to='chat.PrivateChatRoom')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]