# Generated by Django 3.1.4 on 2021-04-10 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0062_database_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='entity',
            name='urlsauditfifthlastyear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlsauditfourthlastyear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlsauditlastyear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlsauditsecondlastyear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlsauditsixthlastyear',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='urlsauditthirdlastyear',
            field=models.IntegerField(default=0),
        ),
    ]
