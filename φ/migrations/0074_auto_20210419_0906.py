# Generated by Django 3.1.4 on 2021-04-19 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0073_database_phase77'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entity',
            name='audited',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase1',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase2',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase3',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase41',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase42',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase5',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase6',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase61',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase62',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase7',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase71',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase72',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase73',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='phase8',
        ),
        migrations.RemoveField(
            model_name='entity',
            name='prepared',
        ),
        migrations.AddField(
            model_name='entity',
            name='EntityCommonStockSharesOutstanding',
            field=models.IntegerField(default=0),
        ),
    ]
