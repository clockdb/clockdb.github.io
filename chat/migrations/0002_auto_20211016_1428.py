# Generated by Django 2.2.15 on 2021-10-16 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='privatechatroom',
            name='connected_users',
        ),
        migrations.AlterField(
            model_name='privatechatroom',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.DeleteModel(
            name='UnreadChatRoomMessages',
        ),
    ]
